const db2 = require('../config/db')

// Get all users
exports.getAllUsers = (req, res) => {
  db2.query('SELECT * FROM users;', (err, result) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(result)
    }
  })
}

// Create a new user
exports.createUser = (req, res) => {
  const { name, age, isMarried } = req.body

  // Use parameterized query to safely insert values
  db2.query(
    'INSERT INTO users (name, age, isMarried) VALUES (?, ?, ?)',
    [name, age, isMarried],
    (err, result) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(result)
      }
    },
  )
}
