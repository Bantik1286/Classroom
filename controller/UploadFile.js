
async function UploadFile (req,res){
    
    db = global.supabase
    console.log(req.files)
    try{
        var response = await supabase.from('Assignment').insert(
            {
                title: req.body.title,
                desc: req.body.desc,
                // class_id: '325',
                file_name: req.files[0].originalname,
                file_id: req.files[0].filename,
                end_date: req.body.end_date
            }
        );
        console.log(response)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }


    res.send({'success':true})
}

module.exports=UploadFile