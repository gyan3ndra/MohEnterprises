import mongoose from 'mongoose'
import crypto from 'crypto'

const schema = mongoose.Schema({
    productId:{
        type:String,
        trim:true,
        default: ()=> crypto.randomBytes(8).toString("hex")
    },
    productType:{
        type:String,
        trim:true
    },
    imageUrl:{
        type:String,
        trim:true
    },
    uploadedAt:{
        type:Date,
        default:Date.now
    }
})

const db = mongoose.model('product',schema)

export default db