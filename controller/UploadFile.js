
async function UploadFile (req,res){
    console.log(req.body)
    console.log(req.files)
    res.send({'success':true})
}

module.exports=UploadFile