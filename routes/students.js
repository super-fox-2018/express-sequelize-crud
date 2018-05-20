const express = require('express');
const router = express.Router();
const studentsController = require('./../controllers').students;

router.get('', studentsController.getStudents);

router
  .get('/add', studentsController.addStudent)
  .post('/add', studentsController.createStudent);

router
  .get('/edit/:studentId', studentsController.editStudent)
  .put('/edit/:studentId', studentsController.updateStudent)

router
  .delete('/delete/:studentId', studentsController.deleteStudent);

module.exports = router;