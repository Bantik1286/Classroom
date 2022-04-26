
async function Login (req,res){

    // taking one connection from pool
    db = global.supabase
    
    const loginCredentials = JSON.parse(req.query[0])
    let data 
    try{
        var user = await db.from('users').select(`*`).match({email:loginCredentials.email,password:loginCredentials.password}).limit(1)
        console.log(user)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(user.data.length>0){
        data = {...user.data[0],'success':true}
       console.log(data)
    }else{
        data = {'success':false}
    }
    console.log(data)
    res.send(data)

}

module.exports=Login