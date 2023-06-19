import express from 'express'
import BrandsController from '../controllers/brandsController.js'

const router = express.Router()

router.post('/', BrandsController.createBrand)
router.get('/', BrandsController.fetchAllBrands)

export default router;
