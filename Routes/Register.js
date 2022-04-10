const express = require('express')
const Register  = require('../controller/Register')

const router = express.Router()

router.get('/',Register)

module.exports=router