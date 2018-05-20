let express = require('express');
let routes = express.Router();

let model = require('./../models');
let Subjects = model.Subject;

// subject homepage
routes.get('/', function(req, res) {
  Subjects.findAll({
    order: [['id', 'ASC']]
  }).then(subjects => {
    res.render('subject/home', {subjects});
  });
});

// subject add page
routes.get('/add', function(req, res) {
  res.render('subject/form' , {
    title: 'This is new subject form'
  });
});

routes.post('/add', function(req, res) {
  let subjectName = req.body.subjectName;
  Subjects.create({
    subjectName,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(() => {
    res.redirect('/subject');
  });
});

// subject edit page
routes.get('/edit/:id', function(req, res) {
  let subjectId = req.params.id;
  Subjects.findById(subjectId).then(function(subject) {
    res.render('subject/edit' , {subject});
  });
});

routes.post('/edit/:id', function(req, res) {
  let subjectId = req.params.id;
  let subjectName = req.body.subjectName;
  Subjects.update({
    subjectName,
    updatedAt: new Date()
  }, {where: {id: subjectId}}).then(() => {
    res.redirect('/subject');
  });
});

// subject delete page
routes.get('/delete/:id', function(req, res) {
  let subjectId = req.params.id;
  Subjects.destroy({where: {id: subjectId}}).then(() =>{
  	res.redirect('/subject')
  });
});

module.exports = routes;