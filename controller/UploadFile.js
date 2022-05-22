
async function UploadFile (req,res){
    data = {}
    db = global.supabase
    console.log(req.files)
    try{
        var response = await supabase.from('Assignment').insert(
            {
                title: req.body.title,
                desc: req.body.desc,
                // class_id: '325',
                class_id:req.body.class_id,
                file_name: req.files[0].originalname,
                file_id: req.files[0].filename,
                end_date: req.body.end_date,
                tot_marks:req.body.tot_marks
            }
        );
        console.log(response)
        data = {'success':true}
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }


    res.send(data)
}

module.exports=UploadFile