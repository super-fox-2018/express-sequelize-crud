const express = require('express');
const router = express.Router();
const subjectsController = require('./../controllers').subjects;
const { catchErrors } = require('./../handlers/errorHandlers');

router.get('/', catchErrors(subjectsController.getSubjects));

router
  .get('/add', subjectsController.addSubject)
  .post('/add', catchErrors(subjectsController.createSubject));

router
  .get('/edit/:subjectId', catchErrors(subjectsController.editSubject))
  .put('/edit/:subjectId', catchErrors(subjectsController.updateSubject));

router
  .delete('/delete/:subjectId', catchErrors(subjectsController.deleteSubject));

module.exports = router;