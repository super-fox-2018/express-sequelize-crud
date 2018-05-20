'use strict'
const express = require('express')
let app = express()
let routes = express.Router()




routes.get('/',function(req,res) {
	teacher.findAll()
	.then(dataTeachers =>{
		res.render("teacher.ejs",{dataTeachers:dataTeachers})	
	})
	
})

module.exports = routes