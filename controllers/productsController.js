import asyncWrapper from "../middlewares/asyncWrapper.js";
import Product from "../model/Product.js";

class ProductsController {
  static fetchAllProducts = asyncWrapper(async (req, res) => {
    let query = Product.find()
    if (req.query.brand) {
      query = query.find({ brand: req.query.brand })
    }
    if (req.query.category) {
      query = query.find({ category: req.query.category })
    }
    if (req.query.sort) {
      query = query.sort({ [req.query.sort]: req.query.order ? req.query.order : 'ASC' })
    }
    if (req.query.page) {
      const pageSize = req.query.limit || 10
      const page = req.query.page
      query = query.skip(pageSize * (page - 1)).limit(pageSize)
    }
    const products = await query
    let totalProducts = await Product.count()
    res.set('X-Total-Count', totalProducts);
    res.status(200).json(products)
  })

  static createProduct = asyncWrapper(async (req, res) => {
    const product = new Product(req.body)
    const savedProduct = await product.save()
    res.status(200).json(savedProduct)
  })

  static fetchSingleProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: `No Product exist with id: ${id}` })
    }
    res.status(200).json(product)
  })

  static updateProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })
    if (!updatedProduct) {
      return res.status(404).json({ message: `No Product exist with id: ${id}` })
    }
    res.status(200).json(updatedProduct)
  })
}

export default ProductsController
