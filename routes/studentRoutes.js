const express = require('express')
const routes = express.Router()
//const Controller = require('../controllers/controller')
let model = require('../models')

routes.get('/',(req,res)=>{
	model.student.findAll({
		order: 
		[
			['id','ASC']
		]
	})
	.then(student=>{
		res.render('student',{student})
	})
})
routes.get('/add',(req,res)=>{
	res.render('addStudent')
})
routes.post('/add',(req,res)=>{
	model.student.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	})
	.then(()=>{
		res.redirect('/students')
	})
})
routes.get('/edit/:id',(req,res)=>{
	model.student.findById(req.params.id)
	.then(student=>{
	res.render('editStudent',{student})	
	})
})

routes.post('/edit/:id',(req,res)=>{
	model.student.findById(req.params.id)
	.then(student=>{
		student.update({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email
		})
	})
	.then(()=>{
		res.redirect('/students')
	})
	.catch(err=>{
		console.log(err.message)
	})
})

routes.get('/delete/:id',(req,res)=>{
	model.student.destroy({
		where: {id: req.params.id}
	})
	.then((student)=>{
		res.redirect('/students')
	})
	.catch(err=>{
		console.log(err.message)
	})
})


module.exports = routes