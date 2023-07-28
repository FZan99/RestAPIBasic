exports.validateUserInput = (req, res, next) => {
  const { name, age, isMarried } = req.body

  if (!name || !age || isMarried === undefined) {
    return res
      .status(400)
      .json({ error: 'Please provide all required fields.' })
  }

  // If the input is valid, proceed to the next middleware or route handler
  next()
}
