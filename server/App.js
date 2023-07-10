const express=require('express');
var cors = require('cors')
const bodyParser= require('body-parser');

const app=express()

function startServer(){
    console.log("Server started at http://localhost:3001");
}

app.use(cors({
    origin: 'http://localhost:3000',
}),bodyParser.json())

app.get("/" ,function(req,res){
    res.send("Hello from server")
    console.log(req.body)
})

app.post("/api/register",function(req,res){
    res.send("Hello from React")
    console.log(req.body)
})

app.listen(3001,startServer());