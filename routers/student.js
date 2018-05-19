const express = require('express');
const router = express.Router();
const Model = require('../models').Student;


router.get('/',(req,res)=>{
    Model
    .getAllData()
    .then(function(studentData){
        res.render('showData.pug',{status: 'student',inputData:studentData})
    })
    .catch(function(error){
        console.log(error)
    })
})
.get('/add',(req,res)=>{
    res.render('showForm.pug',{
        status: 'student',
        request:"http://localhost:3000/student/add",
        first_name:'',
        last_name:'',
        email:''
    })
})
.post('/add',(req,res)=>{
    Model
    .addData(req.body)
    .then(()=>{
        res.render('message.pug',{status:'student',message:'data berhasil ditambah!'})
    })
    .catch((error)=>{
        res.send(error)
    })
})
.get('/edit/:id',(req,res)=>{
    Model
    .getOneById(req.params.id)
    .then((studentFound)=>{
        res.render('showForm.pug',{
            status: 'student',
            request:'http://localhost:3000/student/edit/' + req.params.id,
            first_name:studentFound.first_name,
            last_name:studentFound.last_name,
            email:studentFound.email
        })
    })
    .catch((error)=>{
        res.send(error)
    })
})
.post('/edit/:id',(req,res)=>{
    let studentObj ={
        id: req.params.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Model
    .updateData(studentObj)
    .then(()=>{
        res.render('message.pug',{status:'student',message:'data telah diupdate!'})
    })
    .catch((error)=>{
        res.send(error)
    })
})
.get('/delete/:id',(req,res)=>{
    Model
    .deleteData(req.params.id)
    .then(()=>{
        res.render('message.pug',{status:'student',message:'data telah dihapus!'})
    })
    .catch(error=>{
        res.send(error)
    })
})

module.exports = router