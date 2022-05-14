const express = require('express')
const GetSubmission  = require('../controller/GetSubmission')

const router = express.Router()

router.get('/',GetSubmission)

module.exports=router