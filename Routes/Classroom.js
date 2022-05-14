const express = require('express')
const createClassRoom  = require('../controller/CreateClassroom')
const getClasses = require('../controller/GetClasses')
const joinClassRoom = require('../controller/JoinClassRoom')

const router = express.Router()

router.post('/create',createClassRoom)
router.get('/',getClasses)
router.post('/join',joinClassRoom)

module.exports=router