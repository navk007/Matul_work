const Blog = require('../../models/blog')
const mongoose = require('mongoose');

exports.getBlogById = async(req,res)=>{
    try{

        const{blogId}=req.query;
        //validate
        if(!blogId){
            return res.status(404).json({
                success: false,
                message:"please enter blog id",
            })
        }


        //check if blog exists or not
        const blogExist = await Blog.findById(({_id:blogId}));

        if(!blogExist){
            return res.status(404).json({
                success: false,
                message:"blog not found ",
            })
        }
        
        return res.status(200).json({
            success: true,
            message:"blog fetched successfully",
            blog: blogExist
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