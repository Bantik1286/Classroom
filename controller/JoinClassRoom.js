
async function JoinClassRoom(req,res){

    //For now fetching all announcements instead of fetching by specific class_id

    // taking one connection from pool
    db = global.supabase

    const info = JSON.parse(req.body.details)
    let data
    var classroom
    try{
        var enrollment = await db.from('enrolled_in').insert({class_id:info.classcode,email:info.email,role:'U'})
        classroom = await db.from('classroom').select('*').match({class_id:info.classcode})
        
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(classroom.data.length>0){
        data = {...classroom.data[0],'success':true}
       console.log(data)
    }
    
    console.log(data)
    res.send(data)

}

module.exports=JoinClassRoom