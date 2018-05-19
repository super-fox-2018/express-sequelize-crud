const fs = require('fs');
var express = require('express')
var router = express()
const Model = require('./../models');

// ================= show all data teacher==============

router.get('/', (req, res) => {
  Model.Teacher.findAll({
    order: [
      ['id', 'ASC']
    ]
  }).then((dataTeacher) => {
    res.render('teacher', {
      teacherData: dataTeacher
    })
  })
})

// ================== add student ==================
router.get('/add', (req, res) => {
  res.render('addStudent')
})

router.post('/add', (req, res) => {
  Model.Teacher.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).then(() => {
    res.redirect('/students')
  })
})

// ================ edit teacher ====================
router.get('/edit/:id', function(req, res) {
  let idTeacher = req.params.id
  Model.Teacher.findOne({
      where: {
        id: idTeacher
      }
    })
    .then(function(dataId) {
      res.render('editTeacher', {
        teachers: dataId
      })
    })
})

router.post('/edit/:id', function(req, res) {
  let editId = req.params.id
  Model.Teacher.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }, {
      where: {
        id: editId
      }
    })
    .then(function() {
      res.redirect('/students')
    })
})

// ==================== delete teacher=================
router.get('/delete/:id', (req, res) => {
  let deleteId = req.params.id
  Model.Teacher.destroy({
    where: {
      id: deleteId
    }
  })
  .then(()=>{
    res.redirect('/students')
  })
})


module.exports = router
