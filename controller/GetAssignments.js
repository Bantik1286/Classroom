
async function GetAssignments(req,res){

    //For now fetching all assignments instead of fetching by specific class_id

    // taking one connection from pool
    db = global.supabase

    // const loginCredentials = JSON.parse(req.query[0])
    let data 
    try{
        var assignments = await db.from('Assignment').select(`*`)
        console.log(assignments)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(assignments.data.length>0){
        data = assignments.data
       console.log(data)
    }else{
        data = {'success':false}
    }
    console.log(data)
    res.send(data)

}

module.exports=GetAssignments