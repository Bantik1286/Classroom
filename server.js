// require('dotenv').config()
const express = require('express')
const handleLogin = require('./Routes/Login')
// const handleItem = require('./Routes/Item')
const handleRegister = require('./Routes/Register')
const handleUploadFile = require('./Routes/UploadFile')
const handleDownloadFile = require('./Routes/DownloadFile')
const handleAnnouncement = require('./Routes/Announcement')
const handleAssignments = require('./Routes/Assignments')
const handleSubmitAssignment = require('./Routes/SubmitAssignment')
const handleGetSubmission = require('./Routes/GetSubmission')
const handleClassroom = require('./Routes/Classroom')
const handleChecker = require('./Routes/Checker')
const handleSubmissions = require('./Routes/Submissions')

// const handleCafetarian = require('./Routes/Cafetarian')
// const handleOrder = require('./Routes/Order')
const bodyParser = require('body-parser')
// const path = require('path')
const {createClient} = require('@supabase/supabase-js')
const http  = require("http")

// const cors = require("cors")

const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(express.static('./Client/build'))
// app.use(cors())

const PORT = process.env.PORT || 8000

const server = http.createServer(app)


// const supabase = createClient('https://gdexnfbjauhkojfkrxvl.supabase.co',
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTI0NzM5OSwiZXhwIjoxOTUwODIzMzk5fQ.NIWP_PrlawRYjBgANscmM4r2-zG_vPu8FaLjrydapK0'
// )
const supabase = createClient('https://yolzpmmrpcndcyzjsach.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvbHpwbW1ycGNuZGN5empzYWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkwODgyMjYsImV4cCI6MTk2NDY2NDIyNn0.Ncm7rippyFB21rOiNrFVsBByKRNDpn7iwnpYFbqzbI4'
)

global.supabase=supabase


server.listen(PORT,()=>{
    console.log("server is live...")
    

})
app.use('/api/login',handleLogin)
app.use('/api/register',handleRegister)
app.use('/api/upload/file',handleUploadFile)
app.use('/api/upload/assignment',handleSubmitAssignment)
app.use('/api/download/file',handleDownloadFile)
app.use('/api/announcement',handleAnnouncement)
app.use('/api/assignments',handleAssignments)
app.use('/api/getSubmission',handleGetSubmission)
app.use('/api/classroom',handleClassroom)
app.use('/api/checker',handleChecker)
app.use('/api/submissions',handleSubmissions)
// app.use('/api/Item',handleItem)
// app.use('/api/Cafetarian',handleCafetarian)
// app.use('/api/Order',handleOrder)

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
// });

