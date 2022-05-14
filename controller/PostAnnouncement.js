
async function PostAnnouncement (req,res){

    // taking one connection from pool
    db = global.supabase
    console.log('announcement req received')
    console.log(req.body)
    const announc = JSON.parse(req.body.announc)
    let data = []
    try{
        var response = await supabase.from('announcement').insert(
            {
                email:announc.email,
                desc:announc.announcement
                // classId remain null until classroom feature is not created
            }
        );
        console.log(response)
        
    }
    catch(err){
        console.log(err)
        // data = {'success':false}
    }
        
    if(response.data.length>0){

        try{
            var announcements = await db.from('announcement').select(`*`)
            console.log(announcements)
        }
        catch(err){
            console.log(err)
        }
            
        if(announcements.data.length>0){
            data = announcements.data
           console.log(data)
        }

        // data = {...response.data[0],'success':true}
       console.log(data)
    }else{
        // data = {'success':false}
        console.log('something went wrong..')
    }
    console.log(data)
    res.send(data)

}

module.exports=PostAnnouncement