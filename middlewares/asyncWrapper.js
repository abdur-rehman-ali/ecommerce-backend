const asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
      next()
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

export default asyncWrapper
