import mongoose from 'mongoose'

const drugSchema = new mongoose.Schema(
    {
        image: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        shop_id: {
            ref: 'Shop',
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model('Drug', drugSchema)
