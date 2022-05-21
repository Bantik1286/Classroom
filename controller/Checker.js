
async function Checker(req,res){

    // taking one connection from pool
    db = global.supabase
    
    console.log(req.body)
    const email = JSON.parse(req.body.e)
    let data 
    var update
    try{
        update = await supabase
                        .from('enrolled_in')
                        .update({ role: 'ch' })
                        .match({ email: email.emm,class_id:email.class_id })
        // var user = await db.from('users').select(`*`).match({email:loginCredentials.email,password:loginCredentials.password}).limit(1)
        console.log(update)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(update.data.length>0){
        data = {...update.data[0],'success':true}
       console.log(data)
    }else{
        data = {'success':false}
    }
    console.log(data)
    res.send(data)

}

module.exports=Checker