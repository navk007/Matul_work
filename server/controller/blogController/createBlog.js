const Blog = require('../../models/blog')
const User = require('../../models/user');
const mongoose = require('mongoose');

exports.createBlog = async(req,res)=>{
    try{

        const {title,description,userId,imageUrl} = req.body;

        //validation
        if(!title || !description || !userId){
            return res.status(404).json({
                success: false,
                message:" please enter all the details required",
            })
        }

        //check if user exists or not
        const userExists = await User.findById({_id:userId});

        if(!userExists){
            return res.status(404).json({
                success: false,
                message:"user does not exist",
            })
        }

        //create new blog entry
        const newBlog = new Blog({
            title: title,
            description: description,
            userId: userId,
            imageUrl: imageUrl,
        })


        try{
            await newBlog.save();
            userExists.blogs.push(newBlog);
            await userExists.save();
        }catch(error){
            return res.status(404).json({
                success: false,
                message:"error while saving data in blog schema or user schema",
                errorMessage: error.message,
                error: error
            })
        }
            
        


        // try{

        //     //start session
        //     const session = mongoose.startSession();
        //     await session.startTransaction();
        
        //     await newBlog.save({session});
        //     userExists.blogs.push({newBlog});
        //     await userExists.save({session});

        //     await session.commitTransaction();
        //     await session.endSession();

        // }catch(error){
        //     return res.status(404).json({
        //         success: false,
        //         message:"error while saving data in blog schema or user schema",
        //         error: error.message
        //     })
        // }
        
        return res.status(200).json({
            success: true,
            message:"blog entry successfully created",
        })


    }
    catch(e){

        return res.status(500).json({
            success: false,
            message:"blog creation failed",
            error: e.message
        })
    }
}