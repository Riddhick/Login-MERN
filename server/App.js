const express=require('express');


const app=express()

function startServer(){
    console.log("Server started at http://localhost:3001");
}

app.get("/" ,function(req,res){
    res.send("Hello from server")
})

app.listen(3001,startServer());