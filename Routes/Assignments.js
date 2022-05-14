const express = require('express')
const getAssignments  = require('../controller/GetAssignments')

const router = express.Router()

router.get('/',getAssignments)

module.exports=router