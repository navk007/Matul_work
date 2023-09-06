const User = require('../../models/user')
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

exports.login = async(req,res)=>{
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
        console.log(email)
        console.log(password)

        const userExists = await User.findOne({ email});
        console.log(userExists);

        if(!userExists){
            return res.status(400).json({
                success: false,
                message:"user does not exist" 
            })
        }

        if(await bcrypt.compare(password,userExists.password)){
            
            const token = jwt.sign({email:email},'secret-key',{expiresIn:'1d'});

            // res.cookie('cookieWithToken',token,{httpOnly:true});
            return res.status(200).json(
                {
                    success: true,
                    message: "login successfull",
                    token:token,
                    userId:userExists._id,
                }
            )
        }else{
            return res.status(400).json(
                {
                    success: false,
                    message: "password is incorrect",
                    
                }
            )
        }
        
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"login failed" ,
            error: error.message
        })
    }
}