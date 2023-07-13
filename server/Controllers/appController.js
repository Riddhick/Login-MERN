const Usermodel = require("../models/Usermodel");
const bcrypt=require("bcryptjs");


function register(req,res){
   try{
      const {Username, Password, Email , Profile}=req.body;
      //console.log(req.body)
      const User= new Usermodel({
         Username,
         Password,
         Email,
         Profile:Profile ||""
      });
      User.save()
         .then(result=>res.status(201).send({msg:"New User"}))
         .catch(error=>res.status(500).send({error}))
   }
   catch(error){
      return res.status(500).send(error)
   }
}



module.exports=register;