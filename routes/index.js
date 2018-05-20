const express = require('express');
const router = express.Router();
const studentsController = require('./../controllers').students;

router.get('/students', studentsController.getStudents);

router
  .get('/students/add', studentsController.addStudent)
  .post('/students/add', studentsController.createStudent);

router
  .get('/students/edit/:studentId', studentsController.editStudent)
  .put('/students/edit/:studentId', studentsController.updateStudent)

router
  .delete('/students/delete/:studentId', studentsController.deleteStudent);

module.exports = router;