let express = require('express');
let routes = express.Router();

let model = require('./../models');
let Students = model.Student;

// homepage
routes.get('/', function(req, res) {
  Students.findAll({
    order: [['id', 'ASC']]
  }).then(students => {
    res.render('student/home', {students});
  });
});

// add page
routes.get('/add', function(req, res) {
  res.render('student/form' , {
    title: 'New student form'
  });
});

routes.post('/add', function(req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  Students.create({
    firstName,
    lastName,
    email,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(() => {
    res.redirect('/student');
  });
});

// edit page
routes.get('/edit/:id', function(req, res) {
  let studentId = req.params.id;
  Students.findById(studentId).then(function(student) {
    res.render('student/edit' , {student});
  });
});

routes.post('/edit/:id', function(req, res) {
  let studentId = req.params.id;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  Students.update({
    firstName,
    lastName,
    email,
    updatedAt: new Date()
  }, {where: {id: studentId}}).then(() => {
    res.redirect('/student');
  });
});

// delete page
routes.get('/delete/:id', function(req, res) {
  let studentId = req.params.id;
  Students.destroy({where: {id: studentId}}).then(() =>{
  	res.redirect('/student')
  });
});

module.exports = routes;