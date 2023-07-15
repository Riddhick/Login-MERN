const express = require('express')
const router = express.Router()
const controller=require('../Controllers/appController')

//POST(read) Method 
router.route('/register').post(controller.register);
router.route('/login').post(controller.login)
router.route('/username').post(controller.username)
//Get(create) Method


//PUT(update) Method

module.exports=router
