import express from 'express'
import productdb from '../schema/productSchema.js'
import upload from '../middleware/upload.js'
import fs from 'fs/promises'
const router = express.Router()

// router.get('/',(req,res)=>{
//     try {
        
//     } catch () {
        
//     }
// })
router.post('/',upload.single('image'),async (req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: `MohEnterprices/products/${req.body.productType}`
            }
        )
        // await fs.unlink(req.file.path)
        console.log(result.secure_url)
        res.status(201).json({message:'uploaded!',imageUrl:result.secure_url})
    } catch (err) {
        res.status(500).json({message:'upload failed'})
    }
})

export default router