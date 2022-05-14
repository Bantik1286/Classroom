
async function GetSubmission(req,res){

    db = global.supabase

    const em = JSON.parse(req.query[0])

    let data 
    try{
        var submission = await db.from('submission').select(`*`).match({user_id:em.e}).limit(1)
        console.log(submission)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(submission.data.length>0){
        data = {...submission.data,'success':true}
        console.log(data)

    }else{
        data = {'success':false}
    }
    console.log(data)
    res.send(data)

}

module.exports=GetSubmission