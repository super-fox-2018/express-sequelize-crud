const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const basicRouting = require('./routers');
const {router,Teachers,Students,Subjects} = basicRouting;


app
.set('view engine', 'pug')
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:true}))
.use('/',router)
.use('/teacher',Teachers)
.use('/student',Students)
.use('/subject',Subjects)
.listen(3000,()=>{
    console.log('listening...')
})