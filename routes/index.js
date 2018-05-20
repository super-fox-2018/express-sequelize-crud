const express = require('express');
const router = express.Router();
const studentsRoute = require('./students');
const subjectsRoute = require('./subjects');
const teachersRoute = require('./teachers');

router.use('/students', studentsRoute);
router.use('/subjects', subjectsRoute);
router.use('/teachers', teachersRoute);


module.exports = router;