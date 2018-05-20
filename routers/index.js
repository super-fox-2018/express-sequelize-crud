const express = require('express')
const routers = express.Router()
const model = require('../models')
let Student = model.student;
let Teacher = model.teacher;
// console.log(Student);
let Subject = model.subject;


routers.get('/',function(req,res){
  res.render('home.ejs')
})


routers.get('/student',function(req,res){
  Student.findAll({raw:true})
  .then(function(student){
    res.render('student_tabel.ejs',{student:student})
  })
  // res.render('student.ejs')
})

//add student

routers.get('/student/add',function(req,res){
  res.render('student_form.ejs')
})

routers.post('/student/add',function(req,res){
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var email = req.body.email
  Student.create({
    first_name : first_name,
    last_name : last_name,
    email : email
  })
  .then(student=>{
    // console.log(student);
    let dataStudent = student.get({plain:true})
    // res.send("Succesfully added")
  })
})

//edit student

routers.get('/student/edit/:uid',function (req,res) {
  var id = req.params.uid
  Student.findById(id)
  .then((dataStudent)=>{
    res.render('student_edit.ejs',{student:dataStudent})
  })
})

routers.post('/student/edit/:uid',function(req,res){
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var email = req.body.email
  var id = req.params.uid
  Student.update({first_name:first_name,last_name:last_name,email:email},
    {where:{id:id}
  })
  .then((student)=>{
    // console.log("Succesfully Update");
  })
})

//delete student

routers.get('/student/delete/:uid',function(req,res){
  var id = req.params.uid
  Student.destroy({
    where :{
      id:id
    }
  })
  .then(function(data){
    res.send("Succesfully delete")
  })
})

//Teacher

routers.get('/teacher',function(req,res){
  Teacher.findAll({raw:true})
  .then(function(teacher){
    res.render('teacher_table.ejs',{teacher:teacher})
  })
})

//Add Teacher

routers.get('/teacher/add',function(req,res){
  res.render('teacher_form.ejs')
})

routers.post('/teacher/add',function(req,res){
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var email = req.body.email
  Teacher.create({
    first_name : first_name,
    last_name : last_name,
    email : email
  })
  .then(teacher=>{
    let dataTeacher = teacher.get({plain:true})
    // res.send('Succesfully added')
  })
})

//Update Teacher

routers.get('/teacher/edit/:uid',function (req,res) {
  var id = req.params.uid
  Teacher.findById(id)
  .then((dataTeacher)=>{
    res.render('teacher_edit.ejs',{teacher:dataTeacher})
  })
})

routers.post('/teacher/edit/:uid',function(req,res){
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var email = req.body.email
  var id = req.params.uid
  Teacher.update({first_name:first_name,last_name:last_name,email:email},
    {where:{id:id}
  })
  .then((teacher)=>{
    // console.log("Succesfully Update");
  })
})

//Delete Teacher

routers.get('/teacher/delete/:uid',function(req,res){
  var id = req.params.uid
  Teacher.destroy({
    where :{
      id:id
    }
  })
  .then(function(data){
    res.send("Succesfully delete")
  })
})

//Subject

routers.get('/subject',function(req,res){
  Subject.findAll({raw:true})
  .then(function(subject){
    res.render('subject_table.ejs',{subject:subject})
  })
})

//Add Subject

routers.get('/subject/add',function(req,res){
  res.render('subject_form.ejs')
})

routers.post('/subject/add',function(req,res){
  var subject_name = req.body.subject_name
  Subject.create({
    subject_name : subject_name
  })
  .then(subject=>{
    let dataSubject = subject.get({plain:true})
    // res.send('Succesfully added')
  })
})

//Edit Subject

routers.get('/subject/edit/:uid',function (req,res) {
  var id = req.params.uid
  Subject.findById(id)
  .then((dataSubject)=>{
    res.render('subject_edit.ejs',{subject:dataSubject})
  })
})

routers.post('/subject/edit/:uid',function(req,res){
  var subject_name = req.body.subject_name
  var id = req.params.uid
  Subject.update({subject_name:subject_name},
    {where:{id:id}
  })
  .then((subject)=>{
    // res.send(subject);
  })
})

//Delete Subject

routers.get('/subject/delete/:uid',function(req,res){
  var id = req.params.uid
  Subject.destroy({
    where :{
      id:id
    }
  })
  .then(function(data){
    res.send("Succesfully delete")
  })
})

module.exports = routers;
