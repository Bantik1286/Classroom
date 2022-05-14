const express = require('express')
const createClassRoom  = require('../controller/CreateClassroom')
const getClasses = require('../controller/GetClasses')

const router = express.Router()

router.post('/create',createClassRoom)
router.get('/',getClasses)

module.exports=router