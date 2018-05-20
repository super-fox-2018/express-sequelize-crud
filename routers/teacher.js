const express = require('express');
const router = express.Router();
const Model = require('../models').Teacher;

router.get('/',(req,res)=>{
    Model
    .getAllData()
    .then(function(teacherData){
        res.render('showData.pug',{status: 'teacher',inputData:teacherData})
    })
    .catch(function(error){
        console.log(error)
    })
})
.get('/add',(req,res)=>{
    res.render('showForm.pug',{
        status: 'teacher',
        request:"http://localhost:3000/teacher/add",
        first_name:'',
        last_name:'',
        email:''
    })
})
.post('/add',(req,res)=>{
    Model
    .addData(req.body)
    .then(()=>{
        res.render('message.pug',{status:'teacher',message:'data berhasil dimasukkan!'})
    })
    .catch((error)=>{
        res.send(error)
    })
})
.get('/edit/:id',(req,res)=>{
    Model
    .getOneById(req.params.id)
    .then((teacherFound)=>{
        res.render('showForm.pug',{
            status: 'teacher',
            request:'http://localhost:3000/teacher/edit/' + req.params.id,
            first_name:teacherFound.first_name,
            last_name:teacherFound.last_name,
            email:teacherFound.email
        })
    })
    .catch((error)=>{
        res.send(error)
    })
})
.post('/edit/:id',(req,res)=>{
    let teacherObj ={
        id: req.params.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Model
    .updateData(teacherObj)
    .then(()=>{
        res.render('message.pug',{status:'teacher',message:'data telah diupdate!'})
    })
    .catch((error)=>{
        res.send(error)
    })
})
.get('/delete/:id',(req,res)=>{
    Model
    .deleteData(req.params.id)
    .then(()=>{
        res.render('message.pug',{status:'teacher',message:'data telah dihapus!'})
    })
    .catch(error=>{
        res.send(error)
    })
})

module.exports = router