const Blog = require('../../models/blog')
const User = require('../../models/user');
const mongoose = require('mongoose');

exports.deleteBlog = async(req,res)=>{
    try{

        const {blogId} = req.query;

        //validation
        if(!blogId){
            return res.status(404).json({
                success: false,
                message:"enter blog id ",
            })
        }

        try{

        //check if blog exists or not
        const blogExists = await Blog.findByIdAndDelete({_id:blogId});

        if(!blogExists){
            return res.status(404).json({
                success: false,
                message:"blog does not exist",
            })
        }

            const userId= blogExists.userId;
            const userUpdate= await User.findById({_id:userId});
            await userUpdate.blogs.pull({_id:blogId});
            await userUpdate.save();
        }
        catch(error){
            return res.status(404).json({
                success: false,
                message:"error while deleting blog",
                errorMessage: error.message,
                error: error
            })
        }
            
        
        return res.status(200).json({
            success: true,
            message:"blog deleted successfully",
        })


    }
    catch(e){

        return res.status(500).json({
            success: false,
            message:"blog deletion failed",
            error: e.message
        })
    }
}