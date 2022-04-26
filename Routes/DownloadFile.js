const express = require('express')
const DownloadFile  = require('../controller/DownloadFile')


const router = express.Router()

router.get('/',DownloadFile)

module.exports=router