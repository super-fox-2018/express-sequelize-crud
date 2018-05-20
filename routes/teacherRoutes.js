const express = require('express')
const routes = express.Router()
//const Controller = require('../controllers/controller')
let model = require('../models')

routes.get('/',(req,res)=>{
	model.teacher.findAll({
		order: 
		[
			['id','ASC']
		]
	})
	.then(teacher=>{
		res.render('teacher',{teacher})
	})
})
routes.get('/add',(req,res)=>{
	res.render('addTeacher')
})
routes.post('/add',(req,res)=>{
	model.teacher.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	})
	.then(()=>{
		res.redirect('/teachers')
	})
})
routes.get('/edit/:id',(req,res)=>{
	model.teacher.findById(req.params.id)
	.then(teacher=>{
		res.render('editTeacher',{teacher})
	})
})
routes.post('/edit/:id',(req,res)=>{
	model.teacher.findById(req.params.id)
	.then(teacher=>{
		teacher.update({
			first_name: req.body.full_name,
			last_name: req.body.last_name,
			email: req.body.email
		})
	})
	.then(()=>{
		res.redirect('/teachers')
	})
	.catch(err=>{
		console.log(err.message)
	})
})
routes.get('/delete/:id',(req,res)=>{
	model.teacher.destroy({
		where: {id: req.params.id}
	})
	.then(teacher=>{
		res.redirect('/teachers')
	})
	.catch(err=>{
		console.log(err.message)
	})
})
module.exports = routes