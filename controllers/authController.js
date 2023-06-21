import asyncWrapper from "../middlewares/asyncWrapper.js"
import User from "../model/User.js"

class AuthController {
  static registerUser = asyncWrapper(async (req, res) => {
    const user = new User(req.body)
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  })

}

export default AuthController
