import mongoose from 'mongoose'
import crypto from 'crypto'


const schema = mongoose.Schema({
    kitId: {
        type: String,
        trim: true,
        default: () => crypto.randomBytes(3).toString("hex")
    },
    kitCategory: {
        type: String,
        trim: true,
    },
    kitName: {
        type: String,
        trim: true,
    },
    kitInfo: {
        type: String,
        trim: true,
    },
    kitItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        }
    ],
    uploadedAt:{
        type:Date,
        default:Date.now
    }
})

const db = mongoose.model('kit',schema)

export default db