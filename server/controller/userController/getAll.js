const User = require('../../models/user')


exports.getAll = async(req,res)=>{
    try{


        const users = await User.find({});

        if(users.length===0){
            return res.status(400).json({
                success: false,
                message:"no user found" 
            })
        }else{
            return res.status(200).json(
                {
                    success: true,
                    users,
                    
                }
            )
        }
        
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"fetching users failed" ,
            error: error.message
        })
    }
}