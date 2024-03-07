import AppError from '../utils/AppError.js'
import catchAsync from '../utils/catchAsync.js'
import Order from '../models/orders.model.js'
import axios from 'axios'

export const createOrder = catchAsync(async (req, res, next) => {
    const { name, email, phone, address, total, items, captcha } = req.body
    if (!email) return next(new AppError(400, 'Please provide an email'))
    if (!items || items.length === 0)
        return next(
            new AppError(400, 'Please provide a non empty list of items')
        )

    const axiosRes = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
    )
    if (!axiosRes.data.success)
        return next(new AppError(400, 'ReCaptcha failure'))

    const order = await Order.create({
        name: `${name}`.toLowerCase(),
        total,
        email: `${email}`.toLowerCase(),
        phone,
        address,
        items,
    })
    res.status(201).json({ success: true, data: order })
})

export const getAllOrders = catchAsync(async (req, res, next) => {
    const orders = await Order.find()
    return res.status(200).json({ success: true, data: orders })
})

export const getOrders = catchAsync(async (req, res, next) => {
    const { email } = req.params
    if (!email) return next(new AppError(400, 'Please provide an email'))

    const orders = await Order.find({ email: `${email}`.toLowerCase() }).sort({
        createdAt: -1,
    })
    res.status(200).json({ success: true, data: orders })
})
