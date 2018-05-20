const express = require('express');
const router = express.Router();
const studentsController = require('./../controllers').students;
const { catchErrors } = require('./../handlers/errorHandlers');

router.get('/', catchErrors(studentsController.getStudents));

router
  .get('/add', studentsController.addStudent)
  .post('/add', catchErrors(studentsController.createStudent));

router
  .get('/edit/:studentId', catchErrors(studentsController.editStudent))
  .put('/edit/:studentId', catchErrors(studentsController.updateStudent));

router
  .delete('/delete/:studentId', catchErrors(studentsController.deleteStudent));

module.exports = router;