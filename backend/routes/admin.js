import express from 'express'
import productdb from '../schema/productSchema.js'
import productkitdb from '../schema/productKits.js'
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
        const { productInfo } = req.body
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
            await productdb.findOneAndUpdate({ productId }, { productInfo })
        }
        // console.log(productId,productInfo,req.file)
        res.status(200).json({ message: 'Item updated!' })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.post('/protected', (req, res) => {
    const { password } = req.body
    if (password === process.env.ADMIN_PASSWORD) {
        return res.status(200).json({ redirect: true })
    }
    return res.status(401).json({ redirect: false })
})

router.post('/createkit', async (req, res) => {
    try {
        const { KitName, KitInfo, KitCategory } = req.body
        // console.log(req.body)
        // console.log(productkitdb.schema.paths)
        const kit = await productkitdb.create({
            kitName: KitName,
            kitInfo: KitInfo,
            kitCategory: KitCategory,
        })

        // console.log("CREATED:", kit)
        res.status(201).json({ message: 'Kit Created!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'something went wrong while creating kit' })
    }
})

router.put('/add-to-kit', async (req, res) => {
    try {
        const { kitId, productId } = req.body
        const kit = await productkitdb.findOneAndUpdate({ kitId }, { $addToSet: { kitItems: productId } }, { new: true })
        if (!kit) {
            return res.status(404).json({
                message: 'Kit not found'
            })
        }
        // console.log(req.body)
        // console.log(productkitdb.schema.paths)
        // console.log("CREATED:", kit)
        res.status(200).json({ message: 'added to kit!' })
    } catch (error) {
        // console.log(error)
        res.status(500).json({ message: 'something went wrong while adding item to kit' })
    }
})

router.delete('/deletekit', async (req, res) => {
    try {
        const { kitId } = req.query
        // console.log(kitId)
        const kit = await productkitdb.findOne({ kitId })
        if (!kit) {
            return res.status(404).json({
                message: "kit not found"
            })
        }
        await productkitdb.deleteOne({ kitId })

        res.status(200).json({ message: 'Kit Deleted!' })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})

export default router