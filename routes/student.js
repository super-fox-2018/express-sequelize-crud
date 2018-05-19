var express = require('express')
var router = express.Router()
var model = require('../models')

router.get('/',function(req,res) {
	model.Student.findAll()
	.then(dataStudents =>{
		res.render("./student/list_student.ejs",{dataStudents:dataStudents})
	}) 
})

router.get('/add',function(req,res) {
	res.render("./student/add_student.ejs")
})

router.post('/add',function(req,res) {
	model.Student.create({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email
	})
	.then(dataStudent => {
		res.send("data student telah terdaftar")
		next()
	})
	// .then(()=>{
	// 	res.render('.student/add_student.ejs')
	// })
})

router.get('/edit/:id',function(req,res) {
	model.Student.findOne({
		where: {
			id:req.params.id
		}
	})
	.then(dataStudent =>{
		res.render("./student/edit_student.ejs",{dataStudent:dataStudent})
	})
})

router.post('/edit/:id',function(req,res) {
	model.Student.update({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email
	},{
		where:{
			id:req.params.id
		}
	})
	.then(() =>{
		res.redirect("/student")
	})
})

router.get('/delete/:id',function(req,res) {
	model.Student.destroy({
		where:{
			id:req.params.id
		}
	})
	.then(()=>{
		res.redirect('/student')
	})
})









module.exports = router