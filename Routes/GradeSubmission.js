const express = require('express')
const GradeSubmission  = require('../controller/GradeSubmission')

const router = express.Router()

router.post('/',GradeSubmission)

module.exports=router