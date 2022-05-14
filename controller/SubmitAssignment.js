
async function SubmitAssignment (req,res){
    
    db = global.supabase
    console.log(req.files)
    try{
        var response = await supabase.from('submission').insert(
            {
                assign_id:req.body.assign_id,
                user_id:req.body.user_id,
                file_name:req.files[0].originalname,
                file_id:req.files[0].filename

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

module.exports=SubmitAssignment