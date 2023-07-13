const express = require('express')
const router = express.Router()
const controller=require('../Controllers/appController')

//POST(read) Method 
router.route('/register').post(controller.register);
router.route('/login').post(controller.login)

//Get(create) Method


//PUT(update) Method

module.exports=router
