
async function GradeSubmission(req,res){

    db = global.supabase

    const em = JSON.parse(req.body.details)
    let data 
    var submission
    try{
        submission = await db.from('reviews').insert(
            {
                sub_id:em.sub_id,
                user_id:em.user_id,
                comment:'ok',
                obt_marks:parseInt(em.obt_marks)
            }
        )
        console.log(submission)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(submission.data.length>0){
        data = {...submission.data[0],'success':true}
        console.log(data)

    }else{
        data = {'success':false}
    }
    console.log(data)
    res.send(data)

}

module.exports=GradeSubmission