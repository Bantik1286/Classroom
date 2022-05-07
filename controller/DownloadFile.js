
async function DownloadFile (req,res){
    const file = JSON.parse(req.query[0])
    const fileLocation = `uploads/${file.id}`
    const name = file.name
    res.download(fileLocation,name,(err)=>{
        if(err){
            console.log(err)
        }
    })
    // const readFile = fs.createReadStream(`uploads/${file.id}`)
    // console.log('chick')
    // res.setHeader('Content-Disposition',`attachment: filename="${file.name}"`)
    // readFile.pipe(res)
}

module.exports=DownloadFile