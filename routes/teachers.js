const express = require('express');
const router = express.Router();
const teachersController = require('./../controllers').teachers;
const { catchErrors } = require('./../handlers/errorHandlers');

router.get('/', catchErrors(teachersController.getTeachers));

router
  .get('/add', teachersController.addTeacher)
  .post('/add', catchErrors(teachersController.createTeacher));

router
  .get('/edit/:teacherId', teachersController.editTeacher)
  .put('/edit/:teacherId', catchErrors(teachersController.updateTeacher));

router
  .delete('/delete/:teacherId', catchErrors(teachersController.deleteTeacher));

module.exports = router;