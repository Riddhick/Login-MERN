const express = require('express')
const router = express.Router()
const controller=require('../Controllers/appController')

//POST(read) Method 
router.route('/register').post(controller);
router.route('/login').post()

//Get(create) Method


//PUT(update) Method

module.exports=router
