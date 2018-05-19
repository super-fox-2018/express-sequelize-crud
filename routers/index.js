const Teachers = require('./teacher.js')
const Subjects = require('./subject.js')
const Students = require('./student.js')
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('homepage.pug')
})

module.exports = {router,Teachers,Subjects,Students}