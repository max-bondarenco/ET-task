import Shop from '../models/shops.model.js'
import Drug from '../models/drugs.model.js'
import AppError from '../utils/AppError.js'
import catchAsync from '../utils/catchAsync.js'
import mongoose from 'mongoose'

export const getAllShops = catchAsync(async (req, res, next) => {
    const shops = await Shop.find()
    res.status(200).json({ success: true, data: shops })
})

export const createShop = catchAsync(async (req, res, next) => {
    const { name } = req.body
    if (!name)
        return next(new AppError(401, 'Please provide a name for the shop'))

    const shop = await Shop.create({ name })
    res.status(201).json({ success: true, data: shop })
})

export const getAllDrugs = catchAsync(async (req, res, next) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id))
        return next(new AppError(400, 'Please provide a valid shop id'))

    const shop = await Shop.findById(id)
    if (!shop) return next(new AppError(400, 'Requested shop does not exist'))

    const sortObj = {}
    if (req.query.sort) {
        const sortQuery = req.query.sort.split(',')
        sortQuery.forEach((filter) => {
            if (filter === '') return
            if (filter.startsWith('-')) sortObj[filter.replace('-', '')] = -1
            else sortObj[filter] = 1
        })
    }

    const drugs = await Drug.find({ shop_id: id }).sort(sortObj)
    return res.status(200).json({ success: true, data: drugs })
})

export const createDrug = catchAsync(async (req, res, next) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id))
        return next(new AppError(400, 'Please provide a valid shop id'))

    const shop = await Shop.findById(id)
    if (!shop) return next(new AppError(400, 'Requested shop does not exist'))

    const { name, price } = req.body
    const { fileUrl } = req

    if (!name)
        return next(new AppError(400, 'Please provide a name for the drug'))
    if (!price)
        return next(new AppError(400, 'Please provide a price for the drug'))

    const drug = await Drug.create({ image: fileUrl, name, price, shop_id: id })
    res.status(201).json({ success: true, data: drug })
})

export const deleteShop = catchAsync(async (req, res, next) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id))
        return next(new AppError(400, 'Please provide a valid shop id'))

    await Shop.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: 'Successfully deleted' })
})
