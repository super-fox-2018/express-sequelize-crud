'use strict'
const express = require('express')
const routes = express.Router()
const model = require('./../models')

routes.get('/', function(req, res){
    res.render('home.ejs')
})

routes.get('/student/add', function(req, res){
    res.render('addStudent.ejs')
})

routes.post('/student/add', function(req, res){
    model.Students.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
        email: req.body.email,
        createAt: new Date(),
        updateAt: new Date()
	})
	.then(newStudent => {
		res.redirect('/studentsData')
	})
	.catch(err => {
		res.send('There is something wrong', err)
	})

})

routes.get('/edit/:id',function(req,res) {
	let id = req.params.id
	model.Students.findById(id)
	.then(editStudent =>{
		res.render("editStudent.ejs",{editStudent:editStudent})
    })
    .catch(err => {
		res.send(err)
	})
})

routes.post('/edit/:id',function(req,res) {
	model.Students.update({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email
    },{
     where:{
     id:req.params.id
    }
    })
	.then(() =>{
		res.redirect("/studentsData")
    })
    .catch(err => {
		res.send(err)
	})
})

routes.get('/studentsData', function(req, res){
    model.Students.findAll({
		order : [['id','ASC']]
	})
    .then(studentsData => {
        res.render('studentsData.ejs', {studentsData:studentsData})
    })

    .catch(err => {
		res.send('There is something wrong', err)
	})
})

routes.get('/delete/:id',function(req,res) {
	let id = req.params.id
	model.Students.destroy({
		where:{id : id}
	})
	.then(()=>{
		res.redirect('/studentsData')
    })
    .catch(err => {
		res.send('There is something wrong', err)
	})
})

routes.get('/teachers', function(req, res){
    model.Teacher.findAll({
		order : [['id','ASC']]
	})
    .then(teachersData => {
        res.render('teachers.ejs', {teachersData:teachersData})
    })

    .catch(err => {
		res.send('There is something wrong', err)
	})
})

routes.get('/teacher/add', function(req, res){
    res.render('addTeacher.ejs')
})

routes.post('/teacher/add', function(req, res){
    model.Teacher.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
        createAt: new Date(),
        updateAt: new Date()
	})
	.then(newSubject => {
		res.redirect('/teachers')
	})
	.catch(err => {
		res.send('There is something wrong', err)
	})
})	

routes.get('/teacher/edit/:id',function(req,res) {
	let id = req.params.id
	model.Teacher.findById(id)
	.then(editTeacher =>{
		res.render("editTeacher.ejs",{editTeacher:editTeacher})
    })
    .catch(err => {
		res.send(err)
	})
})

routes.post('/teacher/edit/:id',function(req,res) {
	model.Teacher.update({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email
    },{
     where:{
     id:req.params.id
    }
    })
	.then(() =>{
		res.redirect("/teachers")
    })
    .catch(err => {
		res.send(err)
	})
})

routes.get('/teacher/delete/:id',function(req,res) {
	let id = req.params.id
	model.Teacher.destroy({
		where:{id : id}
	})
	.then(()=>{
		res.redirect('/teachers')
    })
    .catch(err => {
		res.send('There is something wrong', err)
	})
})


routes.get('/subjects', function(req, res){
    model.Subject.findAll({
		order : [['id','ASC']]
	})
    .then(subjectData => {
        res.render('subjects.ejs', {subjectData:subjectData})
    })

    .catch(err => {
		res.send('There is something wrong', err)
	})
})

routes.get('/subject/add', function(req, res){
    res.render('addSubject.ejs')
})

routes.post('/subject/add', function(req, res){
    model.Subject.create({
		subjectName: req.body.subjectName,
        createAt: new Date(),
        updateAt: new Date()
	})
	.then(newSubject => {
		res.redirect('/subjects')
	})
	.catch(err => {
		res.send('There is something wrong', err)
	})

})
routes.get('/subject/edit/:id',function(req,res) {
	let id = req.params.id
	model.Subject.findById(id)
	.then(editSubject =>{
		res.render("editSubject.ejs",{editSubject:editSubject})
    })
    .catch(err => {
		res.send(err)
	})
})

routes.post('/subject/edit/:id',function(req,res) {
	model.Subject.update({
	subjectName:req.body.subjectName,
    },{
     where:{
     id:req.params.id
    }
    })
	.then(() =>{
		res.redirect("/subjects")
    })
    .catch(err => {
		res.send(err)
	})
})

routes.get('/subject/delete/:id',function(req,res) {
	let id = req.params.id
	model.Subject.destroy({
		where:{id : id}
	})
	.then(()=>{
		res.redirect('/subjects')
    })
    .catch(err => {
		res.send('There is something wrong', err)
	})
})

module.exports = routes