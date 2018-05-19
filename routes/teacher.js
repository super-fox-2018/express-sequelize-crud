var express = require("express")
var router = express.Router()
var model = require("../models")

router.get('/',function(req,res) {
	model.Teacher.findAll()
	.then(dataTeachers =>{
		res.render("./teacher/list_teacher.ejs",{dataTeachers:dataTeachers})	
	})
	
})

router.get('/add',function(req,res) {
	res.render('./teacher/add_teacher.ejs')
})

router.post('/add',function(req,res) {
	model.Teacher.create({
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		email : req.body.email
	})
	.then(()=>{
		res.redirect('/teacher/add')
	})
})

router.get('/edit/:id',function(req,res) {
	model.Teacher.findOne({
		where:{
			id:req.params.id
		}
	})
	.then(dataTeacher=>{
		res.render("./teacher/edit_teacher.ejs",{dataTeacher:dataTeacher})
	})
})

router.post('/edit/:id',function(req,res){
	model.Teacher.update({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email
	},{
		where:{
			id:req.params.id
		}
	})
	.then(()=>{
		res.redirect("/teacher")
	})
})

router.get('/delete/:id',function(req,res) {
	model.Teacher.destroy({
		where:{
			id:req.params.id
		}
	})
	.then(()=>{
		res.redirect('/teacher')
	})
})


module.exports = router