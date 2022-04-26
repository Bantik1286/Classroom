const express = require('express')
const UploadFile  = require('../controller/UploadFile')
const multer = require("multer")
const upload = multer({dest:"uploads/"})

const router = express.Router()

router.post('/',upload.array("selectedFile"),UploadFile)

module.exports=router