
async function CreateClassroom (req,res){

    // taking one connection from pool
    db = global.supabase
    const classroom = JSON.parse(req.body.details)
    let data
    var enrolled 
    try{
        var cr = await supabase.from('classroom').insert(
            {
                class_name:classroom.classname,
                created_by:classroom.email
            }
        )
        if(cr.data.length>0){
            // if classroom is successfully created then insert the creator information in enrolled_by table
            enrolled = await supabase.from('enrolled_in').insert({
                email:classroom.email,
                role:'C',
                class_id:cr.data[0].class_id
            })
        }
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(enrolled.data.length>0){
        console.log(cr.data)
        data = {...cr.data[0],'success':true}
       console.log(data)
    }else{
        data = {'success':false}
    }
    console.log(data)
    res.send(data)

}

module.exports=CreateClassroom