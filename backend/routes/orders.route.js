import { Router } from 'express'
import {
    createOrder,
    getAllOrders,
    getOrders,
} from '../controllers/orders.controller.js'

const router = new Router()

router.route('/').post(createOrder).get(getAllOrders)
router.route('/:email').get(getOrders)

export default router
