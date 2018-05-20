const express = require('express');
const router = express.Router();
const studentsRoute = require('./students');
const subjectsRoute = require('./subjects');
const teachersRoute = require('./teachers');
const rootController = require('./../controllers').root;

router.use('/students', studentsRoute);
router.use('/subjects', subjectsRoute);
router.use('/teachers', teachersRoute);
router.use('/', rootController);


module.exports = router;