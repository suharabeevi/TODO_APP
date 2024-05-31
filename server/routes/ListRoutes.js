const express = require('express')
const router = express.Router()
const Listcontroller = require('../controller/listController')

router.post('/addTask',Listcontroller.AddTask)
router.put('/updateTask/:taskId',Listcontroller.EditTask)
router.delete('/DeleteTask/:taskId',Listcontroller.DeleteTask)
router.get('/getTask/:UserId',Listcontroller.getAllTask)

module.exports = router