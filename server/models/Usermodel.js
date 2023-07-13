const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:[true, "Please Provide Username"],
        unique:[true, "Username already exist"],
    },
    Password:{
        type:String,
        required:[true, "Please Provide Password"],
        unique:[false],
    },
    Email:{
        type:String,
        required:[true,"Please Provide Email"],
        unique:[true, "Email Id already registered"],
    },
    Profile:{
        type:String  
    }
});



module.exports=mongoose.models.Users||mongoose.model('User', UserSchema)