const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { validateUserInput } = require('../middleware/checkUserInput')

router.get('/users', userController.getAllUsers)

router.post('/users', validateUserInput, userController.createUser)

// router.put('/users/:id', userController.updateUser)

// router.delete('/users/:id', userController.deleteUser)

module.exports = router
