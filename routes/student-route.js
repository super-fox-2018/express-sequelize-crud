const routes = require('express').Router();
const Models = require('../models');
const Student = Models.Student;

routes.get('/students', (req, res) => {
  Student.findAll()
  .then((students) => {
    console.log(`success --->`,students)
    res.render('displayTables.ejs', {
      category: 'student',
      data: students
    })
  })
  .catch((err) => {
    console.log(`error --->`,err)
    res.send(err)
  })
})

routes.get('/students/add', (req, res) => {
  res.render('inputForm', {
    category: 'student',
    msg: '',
    data: {}
  })
})

routes.post('/students/add', (req, res) => {
  Student.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email
  })
  .then((student) => {
    console.log(student)
    res.render('inputForm', {
      category: 'student',
      data: student,
      msg: 'Student has been added'
    })
  })
})

module.exports = routes