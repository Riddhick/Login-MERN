const express=require('express');
var cors = require('cors');
const bodyParser= require('body-parser');
const router=require('./Routers/routes');
const mongoose=require('mongoose');


const app=express()

function startServer(){
    console.log("Server started at http://localhost:3001");
}

//connect to database :
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true})
    .then(console.log("Database Connected"))

//middleware 
app.use(cors({
    origin: 'http://localhost:3000',
}),bodyParser.json())

//api routes
app.use('/api', router)


app.get("/" ,function(req,res){
    res.send("Hello from server")
    console.log(req.body)
})

app.listen(3001,startServer());