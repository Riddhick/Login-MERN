const express = require('express')
const router = express.Router()

//POST(read) Method 
router.route('/register').post((req,res)=>{
    res.json('register route')
});
router.route('/login').post()

//Get(create) Method


//PUT(update) Method

module.exports=router
