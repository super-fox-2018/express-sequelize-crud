const routes = require('express').Router();
const Models = require('../models');
// const Student = Models.Student;
// const Teacher = Models.Teacher;

routes.get('/', (req, res) => {
  // res.send('Hello world')
  res.render('index.ejs');
})

module.exports = routes;