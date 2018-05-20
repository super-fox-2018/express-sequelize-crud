'use strict'
const express = require('express')

let app = express()
let routes = express.Router()
var model = require("../models")
var teacher = model.dataTeacher



// routes.get('/',function(req,res){
//     res.render('teacher.ejs')
// })


routes.get('/',function(req,res) {
	teacher.findAll()
	.then(dataTeachers =>{
		res.render("teacher.ejs",{dataTeachers:dataTeachers})	
	})
	
})


routes.post('/add', function(req, res) {
	let attributeTeacher = {
	  first_name: req.body.first_name,
	  last_name: req.body.last_name,
	  email: req.body.email
	};
	teacher.add(attributeTeacher)
	.then((teacher) => {
	  cTeacher.list()
	  .then((teachers) => {
		res.render('addTeacher.ejs', {teachers: teachers});
	  })
	  .catch(err => {
		console.log(err.message);
	  });
	})
  });


module.exports = routes