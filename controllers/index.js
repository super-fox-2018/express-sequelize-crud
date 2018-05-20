const students = require('./students');
const subjects = require('./subjects');
const teachers = require('./teachers');

const root = (req, res) => {
  res.render('root');
} 

module.exports = {
  students,
  subjects,
  teachers,
  root
}