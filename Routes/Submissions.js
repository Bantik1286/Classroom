const express = require('express')
const Submissions  = require('../controller/Submissions')

const router = express.Router()

router.get('/',Submissions)

module.exports=router