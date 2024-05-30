const express = require('express')
const router = express.Router()
const usercontroller = require('../controller/userController')


router.post('/signup',usercontroller.UserSignupController)
router.post('/login',usercontroller.UserLoginController)

module.exports = router