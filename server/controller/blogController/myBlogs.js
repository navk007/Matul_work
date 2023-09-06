const Blog = require('../../models/blog')
const mongoose = require('mongoose');

exports.myBlogs = async(req,res)=>{
    try{

        const{userId}=req.query;
        //validate
        if(!userId){
            
            return res.status(404).json({
                success: false,
                message:"invalid user id",
            })
        }


        //check if blog exists or not
        const blogExist = await Blog.find(({userId:userId})).populate('userId','name');

        if(!blogExist){
            return res.status(404).json({
                success: false,
                message:"blogs not found ",
            })
        }
        
        return res.status(200).json({
            success: true,
            message:"blog fetched successfully",
            blogs: blogExist
        })

    }
    catch(e){

        return res.status(500).json({
            success: false,
            message:"error occured while fetching the required blog ",
            error: e.message
        })
    }
}