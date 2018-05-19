const express = require('express');
const router = express.Router();
const Model = require('../models').Subject;


router.get('/',(req,res)=>{
    Model
    .getAllData()
    .then(function(subjectData){
        console.log(subjectData.subject_name)
        res.render('showSubject.pug',{status: 'subject',inputData:subjectData})
    })
    .catch(function(error){
        console.log(error)
    })
})
.get('/add',(req,res)=>{
    res.render('subjectForm.pug',{
        status: 'subject',
        request:"http://localhost:3000/subject/add",
        subject_name:''
    })
})
.post('/add',(req,res)=>{
    Model
    .addData(req.body)
    .then(()=>{
        res.render('message.pug',{status:'subject',message:'data berhasil ditambah!'})
    })
    .catch((error)=>{
        res.send(error)
    })
})
.get('/edit/:id',(req,res)=>{
    Model
    .getOneById(req.params.id)
    .then((subjectFound)=>{
        res.render('subjectForm.pug',{
            status: 'subject',
            request:'http://localhost:3000/subject/edit/' + req.params.id,
            subject_name:subjectFound.subject_name,
        })
    })
    .catch((error)=>{
        res.send(error)
    })
})
.post('/edit/:id',(req,res)=>{
    let subjectObj ={
        id: req.params.id,
        subject_name: req.body.subject_name,
    }
    Model
    .updateData(subjectObj)
    .then(()=>{
        res.render('message.pug',{status:'subject',message:'data telah diupdate!'})
    })
    .catch((error)=>{
        res.send(error)
    })
})
.get('/delete/:id',(req,res)=>{
    Model
    .deleteData(req.params.id)
    .then(()=>{
        res.render('message.pug',{status:'subject',message:'data telah dihapus!'})
    })
    .catch(error=>{
        res.send(error)
    })
})

module.exports = router