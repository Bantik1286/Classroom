
async function GetAnnouncement(req,res){

    //For now fetching all announcements instead of fetching by specific class_id

    // taking one connection from pool
    db = global.supabase

    const loginCredentials = JSON.parse(req.query[0])
    let data = []
    try{
        var announcements = await db.from('announcement').select(`*`).match({class_id:loginCredentials.id})
        console.log(announcements)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(announcements.data.length>0){
        data = announcements.data
       console.log(data)
    }
    
    console.log(data)
    res.send(data)

}

module.exports=GetAnnouncement