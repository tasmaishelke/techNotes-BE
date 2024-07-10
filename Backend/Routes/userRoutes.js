const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

router.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.createNewUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser)

module.exports = router 