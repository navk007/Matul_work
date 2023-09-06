const User = require('../../models/user')
const bcrypt = require('bcrypt');

exports.deleteUser = async(req,res)=>{
    try{

        const{email,password} = req.body;

        //validation
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message:"incomplete fields"
            })
        }

        //check if user exists or not

        const userExists = await User.findOne({ email});

        if(!userExists){
            return res.status(400).json({
                success: false,
                message:"user does not exist" 
            })
        }

        if(await bcrypt.compare(password,userExists.password)){
            await User.findByIdAndDelete({_id:userExists._id});
            return res.status(200).json(
                {
                    success: true,
                    message: "user successfully deleted",
                    
                }
            )

        }else{
            return res.status(400).json(
                {
                    success: false,
                    message: "incorrect password",
                    
                }
            )
        }
        
    }
    catch(error){
        return res.status(400).json(
            {
                success: false,
                message: "deleting user failed",
                
            }
        )
    }
}