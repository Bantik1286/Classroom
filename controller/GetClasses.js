
async function GetClasses(req,res){

    //For now fetching all assignments instead of fetching by specific class_id

    // taking one connection from pool
    db = global.supabase

    const loginDetails = JSON.parse(req.query[0])
    console.log(loginDetails)
    let data = []
    var classes = []
    try{
        var enrollments = await db.from('enrolled_in').select(`*`).match({email:loginDetails.email})
        console.log(enrollments.data)
        for(let i=0; i<enrollments.data.length; i++){
            classes = [...classes,(await db.from('classroom').select('*').match({class_id:enrollments.data[i].class_id})).data[0]]
        
        }
        console.log(classes)
    }
    catch(err){
        console.log(err)
    }
        
    if(classes.length>0){
        data = classes
       console.log(data)
    }
    console.log(data)
    res.send(data)

}

module.exports=GetClasses