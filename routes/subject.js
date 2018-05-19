var express = require("express")
var router = express.Router()
var model = require("../models")

router.get('/',function(req,res) {
	model.Subject.findAll()
	.then(dataSubjects =>{
		res.render("./subject/list_subject.ejs",{dataSubjects:dataSubjects})	
	})
	
})

router.get('/add',function(req,res) {
	res.render('./subject/add_subject.ejs')
})

router.post('/add',function(req,res) {
	model.Subject.create({
		subject_name : req.body.subject_name,
		})
	.then(()=>{
		res.redirect('/subject/add')
	})
})

router.get('/edit/:id',function(req,res) {
	model.Subject.findOne({
		where:{
			id:req.params.id
		}
	})
	.then(dataSubject=>{
		res.render("./subject/edit_subject.ejs",{dataSubject:dataSubject})
	})
})

router.post('/edit/:id',function(req,res){
	model.Subject.update({
		subject_name:req.body.subject_name,
		
	},{
		where:{
			id:req.params.id
		}
	})
	.then(()=>{
		res.redirect("/subject")
	})
})

router.get('/delete/:id',function(req,res) {
	model.Subject.destroy({
		where:{
			id:req.params.id
		}
	})
	.then(()=>{
		res.redirect('/subject')
	})
})


module.exports = router