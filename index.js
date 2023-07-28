const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')

app.use(express.json())

// Use the user routes
app.use(userRoutes)

app.listen('3001', () => {
  console.log('server running on port 3001')
})
