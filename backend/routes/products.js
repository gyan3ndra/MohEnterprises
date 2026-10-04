import express from 'express'
import productdb from '../schema/productSchema.js'
import productkitdb from '../schema/productKits.js'
import upload from '../middleware/upload.js'
import cloudinary from '../config/cloudinary.js'
import fs from 'fs/promises'
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { type } = req.query
        const products = await productdb.find(type ? { productType: type } : {})
        res.status(200).json(products)
    } catch (err) {
        res.status(200).json({ message: 'some error occured while fetching products' })
    }
})
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { productType, productInfo } = req.body
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: `MohEnterprices/products/${req.body.productType}`
            }
        )
        await productdb.insertOne({ productType, productInfo, imageUrl: result.secure_url })
        await fs.unlink(req.file.path)
        // console.log(result.secure_url)
        res.status(201).json({ message: 'uploaded!', imageUrl: result.secure_url })
    } catch (err) {
        console.log("CLOUDINARY ERROR:", err)
        res.status(500).json({ message: 'upload failed' })
    }
})

router.get('/kits', async (req, res) => {
    const kits = await productkitdb.find().populate({
        path: 'kitItems',
        model: 'product',
        select: 'productId productInfo'
    })
    res.status(200).json(kits)
})

export default router