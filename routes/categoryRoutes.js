import express from 'express'
import CategoryController from '../controllers/categoryController.js'

const router = express.Router()

router.post('/', CategoryController.createCategory)
router.get('/', CategoryController.fetchAllCategories)

export default router;
