import express from 'express'
import productdb from '../schema/productSchema.js'
import cloudinary from '../config/cloudinary.js'
import upload from '../middleware/upload.js'
import fs from 'fs/promises'
import { redirect } from 'react-router-dom'

const router = express.Router()

function getPublicId(imageUrl) {
    const parts = imageUrl.split("/upload/")[1]

    const withoutVersion = parts.replace(/^v\d+\//, "")

    return withoutVersion.replace(/\.[^/.]+$/, "")
}

router.delete('/delete', async (req, res) => {
    try {
        const { productId } = req.query
        const product = await productdb.findOne({ productId })
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        const publicId = getPublicId(product.imageUrl)
        // console.log(publicId)

        await cloudinary.uploader.destroy(publicId)
        const result = await productdb.deleteOne({ productId })

        res.status(200).json({ message: 'Item Deleted!', item: result })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.put('/update', upload.single('productImage'), async (req, res) => {
    try {
        const { productId } = req.query
        const {productInfo} = req.body
        const product = await productdb.findOne({ productId })
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        const publicId = getPublicId(product.imageUrl)
        if (req.file) {
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: `MohEnterprices/products/${product.productType}`
                }
            )
            product.imageUrl = result.secure_url
            await product.save()
            await cloudinary.uploader.destroy(publicId)
            await fs.unlink(req.file.path)
        }
        if (productInfo) {
            await productdb.findOneAndUpdate({ productId },{productInfo})
        }
        // console.log(productId,productInfo,req.file)
        res.status(200).json({ message: 'Item updated!' })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.post('/protected',(req,res)=>{
    const {password} = req.body
    if(password===process.env.ADMIN_PASSWORD){
        return res.status(200).json({redirect:true})
    }
    return res.status(401).json({redirect:false})
})

export default router