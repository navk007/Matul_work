const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    email:{
        type : String,
        required: true,
    },
    password:{
        type : String,
        required: true,
    },
    blogs:[{
        type: mongoose.Types.ObjectId,
        ref:"Blog",
    }]
})

module.exports = mongoose.model('user',userSchema);