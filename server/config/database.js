require('dotenv').config();
const mongoose = require('mongoose');

const connect =()=>{
    try{
        const url= process.env.MONGODB_URI;
        mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log("connected to database successfully")
    }catch(e){
        console.log(e,"couldn't connect to database")
        process.exit(1);
    }
}

module.exports =connect