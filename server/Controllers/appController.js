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
         const {Email, Password}=req.body;
         const findUser=await Usermodel.findOne({Email})

         if(findUser){
            const match=await bcrypt.compare(Password,findUser.Password)
            if(match)
               return res.status(201).send({msg:"Password Matched"})
            return res.status(500).send({msg:"Failed to validate password"})                  
         }
         return res.status(500).send({Error:"Wrong Email Id"})
   }
   catch(error){
      return res.status(500).send(error)
   }
}


async function username(req,res){
   try{
      const {Username}=req.body;
      await Usermodel.findOne({Username})
         .then(user=>{
            if(user!==null)
               return res.json(user)
            else if(user===null)
               return res.status(500).send({msg:"No User Found"})
         })
         .catch(()=>{
            return res.status(500).send({msg:"Error"})
         })
      

   }
   catch(error){
      return res.status(500).send({msg:"Failed to Conenct with database"})
   }
}


module.exports={register,login,username};