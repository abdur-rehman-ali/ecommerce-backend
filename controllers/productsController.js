import Product from "../model/Product.js";

class ProductsController {
  static fetchAllProducts = async (req, res) => {
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
    try {
      const products = await query
      res.status(200).json(products)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  static createProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
      const savedProduct = await product.save()
      res.status(200).json(savedProduct)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  static fetchSingleProduct = async (req, res) => {
    const { id } = req.params
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: `No Product exist with id: ${id}` })
      }
      res.status(200).json(product)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

export default ProductsController
