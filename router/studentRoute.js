const express = require('express')
const stuRouter = new express.Router()

const { RegisternewStu, loginStudent, } = require('../controller/studentController.js')

//get students
stuRouter.post('/signup',RegisternewStu)    //first commit
stuRouter.post('/login', loginStudent)     //testing


module.exports = stuRouter;


//kjkijij
