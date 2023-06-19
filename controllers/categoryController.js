import asyncWrapper from "../middlewares/asyncWrapper.js"
import Category from "../model/Category.js"

class CategoryController {
  static fetchAllCategories = asyncWrapper(async (req, res) => {
    const categories = await Category.find()
    res.status(200).json(categories)
  })

  static createCategory = asyncWrapper(async (req, res) => {
    const category = new Category(req.body)
    const savedCategory = await category.save()
    res.status(201).json(savedCategory)
  })
}

export default CategoryController
