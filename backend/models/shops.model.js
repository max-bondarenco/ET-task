import mongoose from 'mongoose'
import Drug from './drugs.model.js'

const shopSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
)

shopSchema.post('findOneAndDelete', async function (doc, next) {
    await Drug.deleteMany({ shop_id: doc._id })
    next()
})

export default mongoose.model('Shop', shopSchema)
