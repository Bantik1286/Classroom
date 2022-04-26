const fs = require('fs')

async function DownloadFile (req,res){
    const file = JSON.parse(req.query[0])
    
    // const readFile = fs.createReadStream(`uploads/${file.id}`)
    // console.log('chick')
    // res.setHeader('Content-Disposition',`attachment: filename="${file.name}"`)
    // readFile.pipe(res)
}

module.exports=DownloadFile