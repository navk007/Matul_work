const Blog = require('../../models/blog')
const mongoose = require('mongoose');

exports.getAllBlogs = async(req,res)=>{
    try{

        //check if blog exists or not
        const blogs = await Blog.find({}).populate('userId','name');

        if(!blogs){
            return res.status(404).json({
                success: false,
                message:"no blog found ",
            })
        }
        
        return res.status(200).json({
            success: true,
            message:"blog fetched successfully",
            blogs: blogs
        })

    }
    catch(e){

        return res.status(500).json({
            success: false,
            message:"error occured while fetching all blogs ",
            error: e.message
        })
    }
}