const express = require('express')
const getAssignments  = require('../controller/GetAssignments')
const getClassAssignments = require('../controller/GetClassAssignments')

const router = express.Router()

router.get('/',getAssignments)
router.get('/fetchall',getClassAssignments)

module.exports=router