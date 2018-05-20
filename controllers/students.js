const { Student } = require('./../models'); 
const helpers = require('./../helpers');

const columns = ['first_name', 'last_name', 'email'];

exports.getStudents = (req, res) => {
  Student.findAll({
    order: [['id', 'ASC']],
    raw: true,
  })
    .then(students => {
      res.render('index', { 
        title: 'Students', 
        tableName: 'students',
        records: students, 
        h: helpers,
      });
    });
}

exports.addStudent = (req, res) => {
  res.render('form', { 
    title: 'Add Student',
    mode: 'Add',
    tableName: 'students',
    columns,
    h: helpers,
  });
}

exports.createStudent = (req, res) => {
  const newStudent = req.body;
  Student.create(newStudent)
    .then(result => res.redirect('/students'));
}

exports.editStudent = (req, res) => {
  const { studentId } = req.params;
  Student.findById(studentId, { raw : true })
    .then(student => res.render('form', { 
      title: 'Edit Student', 
      mode: 'Edit', 
      tableName: 'students',
      columns,
      record: student,
      h: helpers,
    }));
}

exports.updateStudent= (req, res) => {
  const { studentId } = req.params;
  const updatedStudent = req.body;
  Student.update(updatedStudent, { where : { id : studentId }})
    .then(result => res.redirect('/students'));
}

exports.deleteStudent = (req, res) => {
  const { studentId } = req.params;
  Student.destroy({ where : { id : studentId }})
    .then(result => res.redirect('/students'));
}