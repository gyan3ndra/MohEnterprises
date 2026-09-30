import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import products from './routes/products.js'

try {
    await mongoose.connect(process.env.MONGO_URL)
} catch (error) {
    console.log(error)
}
const app = express()
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json())
app.use('/products',products)

app.get('/api',(req,res)=>{
    res.status(200).json({message:'hell'})
})
app.listen(3000)