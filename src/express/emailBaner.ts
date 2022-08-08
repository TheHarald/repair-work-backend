export async function checkEmail(req,res,email_ban,request,requestData){

    const setUnbanTime = ()=>{
        let new_unban_time = new Date()
        new_unban_time.setSeconds(new_unban_time.getSeconds() + 15) //refactor to minutes
        return new_unban_time.toISOString()
    }

    let unbanTime = new Date();
    unbanTime.setSeconds(unbanTime.getSeconds() + 15) //refactor to minutes
    unbanTime.toISOString()

    const bannedEmail =  await email_ban.findOne({where:{
        email:req.body.email
    }});


    if(bannedEmail){
        // console.log( new Date(bannedEmail.unban_time).getTime() > new Date().getTime() )
        // console.log( new Date(bannedEmail.unban_time).getTime() , new Date().getTime() )
        if(new Date(bannedEmail.unban_time).getTime() > new Date().getTime() ){
            res.status(405).send("Email находится в бане")    
        }else{
            await email_ban.update({unban_time:setUnbanTime()},{where:{id:bannedEmail.id}})
            res.status(201).json(requestData.dataValues)}
    }else{
        const emailBan = await email_ban.create({
            email:req.body.email,
            requestId:requestData.dataValues.id,
            unban_time:unbanTime
        })
        res.status(201).json(requestData.dataValues)
    }
}