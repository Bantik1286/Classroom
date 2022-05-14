const express = require('express')
const postAnnouncement  = require('../controller/PostAnnouncement')
const getAnnouncement = require('../controller/GetAnnouncement')

const router = express.Router()

router.get('/',getAnnouncement)
router.post('/post',postAnnouncement)

module.exports=router