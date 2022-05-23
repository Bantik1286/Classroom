
async function GetGrade(req,res){

    //For now fetching all assignments instead of fetching by specific class_id

    // taking one connection from pool
    db = global.supabase

    const loginDetails = JSON.parse(req.query[0])
    // console.log(loginDetails)
    let data = {}
    try{
        var resp = await db.from('reviews').select(`*`).match({sub_id:loginDetails.id})
        if(resp.data.length>0){
            data={'success':true}
        }else{
            data={'success':false}
        }
        console.log(resp.data)
    }
    catch(err){
        data={'success':false}
        console.log(err)
    }
        
    
    // console.log(data)
    res.send(data)

}

module.exports=GetGrade