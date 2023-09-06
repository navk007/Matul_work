const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type : String,
        required: true,
    },
    description:{
        type : String,
        required: true,
    },
    imageUrl:{
        type : String,
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    }
    
})

module.exports = mongoose.model('Blog',blogSchema);