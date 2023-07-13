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
   }
   catch(error){
      return res.status(500).send(error)
   }
}


async function login(req,res){
   try{
         const {Username, Password}=req.body;
         const findUser=await Usermodel.findOne({Username})

         if(findUser){
            const match=bcrypt.compare(Password,findUser.Password)
            if(match){
               return res.status(201).send({msg:"Password Matched"})
            }
            else{
                return res.staus(500).send({Error:"Password not matched"})  
            }
         }
         return res.status(500).send({Error:"User Does not exist"})
   }
   catch(error){
      return res.status(500).send(error)
   }
}


module.exports={register,login};