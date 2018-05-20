const routes = require('express').Router();
const Models = require('../models');
const Teacher = Models.Teacher;

routes.get('/teachers', (req, res) => {
  Teacher.findAll({raw: true})
  .then((teachers) => {
    console.log(`success --->`,teachers)
    res.render('displayTables.ejs', {
      category: 'teacher',
      data: teachers
    })
  })
  .catch((err) => {
    console.log(`error --->`,err)
    res.send(err)
  })
})

module.exports = routes;