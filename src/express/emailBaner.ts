export async function checkEmail(req,email_ban){

    const setUnbanTime = ()=>{
        let new_unban_time = new Date()
        new_unban_time.setSeconds(new_unban_time.getSeconds() + 30) //refactor to minutes
        return new_unban_time.toISOString()
    }

    const bannedEmail =  await email_ban.findOne({where:{
        email:req.body.email
    }});


    if(bannedEmail){
        // console.log( new Date(bannedEmail.unban_time).getTime() > new Date().getTime() )
        // console.log( new Date(bannedEmail.unban_time).getTime() , new Date().getTime() )
        if(new Date(bannedEmail.unban_time).getTime() > new Date().getTime()){
            console.log('ban');
             return false
        }else{
            await email_ban.update({unban_time:setUnbanTime()},{where:{id:bannedEmail.id}})
            console.log('allow');
            return true
        }
    }else{
        const emailBan = await email_ban.create({
            email:req.body.email,
            unban_time:setUnbanTime()
        })
        return true
    }
}