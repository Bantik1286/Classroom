const express = require('express')
const GetGrade  = require('../controller/GetGrade')

const router = express.Router()

router.get('/',GetGrade)

module.exports=router