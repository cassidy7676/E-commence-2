const express =require('express')
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const dotEnv =require('dotenv')


// configure dotenv
dotenv.config();

//port
const port = process.env.PORT || 8200

//server
const app = express();




app.listen(PORT, ()=>{
    console.log(`server started on http://localhost:${port}`)
});