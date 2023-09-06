const Blog = require('../../models/blog')

exports.updateBlog = async(req,res)=>{
    try{

        const {title,description,blogId,imageUrl} = req.body;

        //validation
        if(!title || !description || !blogId){
            return res.status(404).json({
                success: false,
                message:" please enter all the details required",
            })
        }

        try{
        //check if user exists or not
        const blogExists = await Blog.findByIdAndUpdate({_id:blogId},{
            title:title,
            description:description,
            imageUrl:imageUrl
        });

        if(!blogExists){
            return res.status(404).json({
                success: false,
                message:"blog does not exist",
            })
        }
            
        }catch(error){
            return res.status(404).json({
                success: false,
                message:"error while updating blog",
                errorMessage: error.message,
                error: error
            })
        }
            
    
        return res.status(200).json({
            success: true,
            message:"blog updated successfully",
        })


    }
    catch(e){

        return res.status(500).json({
            success: false,
            message:"blog updation failed",
            error: e.message
        })
    }
}