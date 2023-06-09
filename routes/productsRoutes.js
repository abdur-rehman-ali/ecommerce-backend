import express from "express";
const router = express.Router()
import ProductsController from '../controllers/productsController.js'

router.get('/', ProductsController.fetchAllProducts)
router.post('/', ProductsController.createProduct)
router.get('/:id', ProductsController.fetchSingleProduct)
router.patch('/:id', ProductsController.updateProduct)

export default router;
