const User = require('../../models/user')
const bcrypt = require('bcrypt');


exports.signUp=async (req,res)=>{

    try{

        const{email,password,name,confirmPassword}=req.body;

    //validation
    if(!email || !password || !name || !confirmPassword){
        return res.status(400).json({
            success: false,
            message:"incomplete fields"
        })
    }

    //password matching

    if(password!==confirmPassword){
        return res.status(400).json({
            success: false,
            message:"password do not match with confirm password" 
        })
    }

    //check if user exists
    const userExists = await User.findOne({email: email});

    if(userExists){
        return res.status(400).json({
            success: false,
            message:"user already exists" 
        })
    }

    //generate hash password

    let hashPass;

    try{
        hashPass=await bcrypt.hash(password,10);
    }catch(e){
        return res.status(400).json({
            success: false,
            message:"password hashing failed" 
        })
    }

    //saving into database
    await User.create({
        name,email,password:hashPass
    })

    return res.status(200).json(
        {
            success: true,
            message: "user created successfully",
            
        }
    )


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message:"SignUp failed" ,
            error: error.message
        })
    }
    
}