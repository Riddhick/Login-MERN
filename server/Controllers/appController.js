const Usermodel = require("../models/Usermodel");
const bcrypt=require("bcryptjs");


async function register(req,res){
   try{
      const {Username, Password, Email , Profile}=req.body;
      
      const checkUser= await Usermodel.findOne({Username});
      if(checkUser){
         return res.status(500).send({msg:'User already exists'})
      }
      const checkEmail=await Usermodel.findOne({Email});
      if(checkEmail){
         return res.status(500).send({msg:'Try another Email Id'})
      }

     bcrypt.hash(Password,10,function(err,hash){
         if (err){
            return res.status(500).send(err)
         }
         const User= new Usermodel({
            Username,
            Password:hash,
            Email,
            Profile:Profile ||""
         });
         User.save()
            .then(result=>res.status(201).send({msg:"New User"}))
            .catch(error=>res.status(500).send({error}))
      })
     /* const User= new Usermodel({
         Username,
         Password:hashedPassword,
         Email,
         Profile:Profile ||""
      });
      User.save()
         .then(result=>res.status(201).send({msg:"New User"}))
         .catch(error=>res.status(500).send({error}))*/
   }
   catch(error){
      return res.status(500).send(error)
   }
}



module.exports=register;