import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        items: {
            type: Object,
        },
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    { timestamps: true }
)

export default mongoose.model('Order', orderSchema)
