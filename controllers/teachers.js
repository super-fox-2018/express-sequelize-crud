const { Teacher } = require('./../models'); 
const helpers = require('./../helpers');

const columns = ['first_name', 'last_name', 'email'];

exports.getTeachers = (req, res) => {
  Teacher.findAll({
    order: [['id', 'ASC']],
    raw : true,
  })
    .then(teachers => {
      res.render('index', { 
        title: 'Subjects',
        tableName: 'teachers',
        records: teachers,
        h: helpers,
      })
    });
}

exports.addTeacher = (req, res) => {
  res.render('form', { 
    title: 'Add Teacher', 
    mode : 'Add',
    tableName: 'teachers',
    columns,
    h : helpers,
  });
}

exports.createTeacher = (req, res) => {
  const newTeacher = req.body;
  Teacher.create(newTeacher)
    .then(result => res.redirect('/teachers'));
}

exports.editTeacher = (req, res) => {
  const { teacherId } = req.params;
  Teacher.findById(teacherId, { raw : true })
    .then(teacher => res.render('form', { 
      title : 'Edit Teacher', 
      mode : 'Edit', 
      tableName: 'teachers',
      columns,
      record: teacher,
      h : helpers,
    }));
}

exports.updateTeacher = (req, res) => {
  const { teacherId } = req.params;
  const updatedTeacher = req.body;
  Teacher.update(updatedTeacher, { where : { id : teacherId }})
    .then(result => res.redirect('/teachers'));
}

exports.deleteTeacher = (req, res) => {
  const { teacherId } = req.params;
  Teacher.destroy({ where : { id : teacherId }})
    .then(result => res.redirect('/teachers'));
}