const express= require('express');
const app = express();
require('dotenv').config();
const connect = require('./config/database')
const routes = require('./routes/Routes')
const cors = require('cors');


//middleware
app.use(express.json());
app.use(cors());

//connect to database
connect();

//routes
app.use('/api/v1',routes);


//port connection
const port= process.env.PORT_NO || 3001;
app.listen(port,()=>{
    console.log('listening on port'+port);
})