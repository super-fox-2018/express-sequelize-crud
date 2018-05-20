'use strict'
const express = require('express')
let app = express()
let student = require('./routes/routeStudent.js')
var model = require("./models")
var teacher = model.dataTeacher
const cTeacher = require('./controller/controllerTeacher.js');
const cStudent = require('./controller/controllerStudent.js')
const cSubject = require('./controller/controllerSubject.js')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs')


app.listen(3000)


app.get('/teacher',function(req,res) {
	cTeacher.list()
	.then(dataTeachers =>{
		res.render("teacher.ejs",{dataTeachers:dataTeachers})	
	})
	
})

app.get('/teacher/add', function(req, res) {
    res.render('addTeacher.ejs');
  });
  
app.post('/teacher/add', function(req, res) {
    let attributeTeacher = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    };
    cTeacher.add(attributeTeacher)
    .then(() => {
        res.redirect('/teacher');
    })

    .catch(err => {
        console.log(err.message);
    });
  });

app.get('/teacher', function (req, res) {
	let id = req.params.id;
	cTeacher.deleteTeachers(id)
		.then(() => {
			res.redirect('/teacher');
		})
		.catch(err => {
			console.log(err.message);
		});

});

//===================================


app.get('/student',function(req,res) {
	cStudent.list()
	.then(dataStudents =>{
		res.render("student.ejs",{dataStudents:dataStudents})	
	})
	
})

app.get('/student/add', function(req, res) {
    res.render('addStudent.ejs');
  });
  
app.post('/student/add', function(req, res) {
    let attributeStudent = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    };
    cStudent.add(attributeStudent)
    .then(() => {
        res.redirect('/student');
    })

    .catch(err => {
        console.log(err.message);
    });
  });

app.get('/student', function (req, res) {
	let id = req.params.id;
	cStudent.deleteStudents(id)
		.then(() => {
			res.redirect('/student');
		})
		.catch(err => {
			console.log(err.message);
		});

});

//==============================================

app.get('/subject',function(req,res) {
	cSubject.list()
	.then(dataSubjects =>{
		res.render("subject.ejs",{dataSubjects:dataSubjects})	
	})
	
})

app.get('/subject/add', function(req, res) {
    res.render('addSubject.ejs');
  });
  
app.post('/subject/add', function(req, res) {
    let attSubject = {
      subject_name: req.body.subject_name
    };
    cSubject.add(attSubject)
    .then(() => {
        res.redirect('/subject');
    })

    .catch(err => {
        console.log(err.message);
    });
  });

app.get('/subject', function (req, res) {
	let id = req.params.id;
	cSubject.deleteSubjects(id)
		.then(() => {
			res.redirect('/subject');
		})
		.catch(err => {
			console.log(err.message);
		});

});