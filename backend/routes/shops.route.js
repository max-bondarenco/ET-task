import { Router } from 'express'
import {
    createDrug,
    createShop,
    deleteShop,
    getAllDrugs,
    getAllShops,
} from '../controllers/shops.controller.js'
import uploadFileRouter from '../firebase/firebase.js'

const router = new Router()

router.route('/').get(getAllShops).post(createShop)
router.route('/:id/drugs/').get(getAllDrugs).post(uploadFileRouter, createDrug)
router.route('/:id').delete(deleteShop)

export default router
