import Product from "../model/Product.js";

class ProductsController {
  static fetchAllProducts = async (req, res) => {
    try {
      const products = await Product.find()
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
}

export default ProductsController