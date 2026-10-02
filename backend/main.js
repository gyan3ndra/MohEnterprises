import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8'])
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import products from './routes/products.js'
import admin from './routes/admin.js'

try {
    await mongoose.connect(process.env.MONGO_URL)
} catch (error) {
    console.log(error)
}

const app = express()
app.use(cors({
    // origin:"http://localhost:5173",
    origin:true,
}))
app.use(express.json())
app.use('/products',products)
app.use('/admin',admin)

app.get('/api',(req,res)=>{
    res.status(200).json({message:'hell'})
})
app.listen(3000)