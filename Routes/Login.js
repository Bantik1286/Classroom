const express = require('express')
const Login  = require('../controller/Login')

const router = express.Router()

router.get('/',Login)

module.exports=router