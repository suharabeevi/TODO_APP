const express = require('express')
const router = express.Router()
const Listcontroller = require('../controller/listController')

router.post('/addTask',Listcontroller.AddTask)

module.exports = router