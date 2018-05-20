let express = require('express');
let routes = express.Router();

let model = require('./../models');
let Teachers = model.Teacher;

// teacher homepage
routes.get('/', function(req, res) {
  Teachers.findAll({
    order: [['id', 'ASC']]
  }).then(teachers => {
    res.render('teacher/home', {teachers});
  });
});

// teacher add page
routes.get('/add', function(req, res) {
  res.render('teacher/form' , {
    title: 'This is new teacher form'
  });
});

routes.post('/add', function(req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  Teachers.create({
    firstName,
    lastName,
    email,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(() => {
    res.redirect('/teacher');
  });
});

// teacher edit page
routes.get('/edit/:id', function(req, res) {
  let teacherId = req.params.id;
  Teachers.findById(teacherId).then(function(teacher) {
    res.render('teacher/edit' , {teacher});
  });
});

routes.post('/edit/:id', function(req, res) {
  let teacherId = req.params.id;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  Teachers.update({
    firstName,
    lastName,
    email,
    updatedAt: new Date()
  }, {where: {id: teacherId}}).then(() => {
    res.redirect('/teacher');
  });
});

// teacher delete page
routes.get('/delete/:id', function(req, res) {
  let teacherId = req.params.id;
  Teachers.destroy({where: {id: teacherId}}).then(() =>{
  	res.redirect('/teacher')
  });
});

module.exports = routes;