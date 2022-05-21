
async function Submissions (req,res){
    
    db = global.supabase
    console.log(req.query[0])
    const details = JSON.parse(req.query[0])
    var response
    var data
    try{
        response = await supabase.from('submission').select('*').match({assign_id:details.assign_id})
        data = response.data
    }
    catch(err){
        console.log(err)
    }

    res.send(data)
}

module.exports=Submissions