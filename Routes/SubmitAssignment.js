const express = require('express')
const SubmitAssignment  = require('../controller/SubmitAssignment')
const multer = require("multer")
const upload = multer({dest:"uploads/"})

const router = express.Router()

router.post('/',upload.array("selectedFile"),SubmitAssignment)

module.exports=router