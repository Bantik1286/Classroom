const express = require('express')
const Checker  = require('../controller/Checker')

const router = express.Router()

router.put('/',Checker)

module.exports=router