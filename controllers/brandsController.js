import asyncWrapper from "../middlewares/asyncWrapper.js"
import Brand from "../model/Brand.js"

class BrandsController {
  static fetchAllBrands = asyncWrapper(async (req, res) => {
    const brands = await Brand.find()
    res.status(200).json(brands)
  })

  static createBrand = asyncWrapper(async (req, res) => {
    console.log(req.body);
    const brand = new Brand(req.body)
    const savedBrand = await brand.save()
    res.status(201).json(savedBrand)
  })
}

export default BrandsController
