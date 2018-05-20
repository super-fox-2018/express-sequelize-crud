const { Student } = require('./../models'); 

exports.getStudents = (req, res) => {
  Student.findAll({
    order: [['id', 'ASC']]
  },
  { raw : true })
    .then(students => {
      res.render('students', { title: 'Students', students })
    });
}

exports.addStudent = (req, res) => {
  res.render('student-form', { title: 'Add Student', mode : 'Add'});
}

exports.createStudent = (req, res) => {
  const newStudent = req.body;
  Student.create(newStudent)
    .then(result => res.redirect('/students'));
}

exports.editStudent = (req, res) => {
  const { studentId } = req.params;
  const updatedStudent = req.body;
  Student.findById(studentId, { raw : true })
    .then(student => res.render('student-form', { 
      title : 'Edit Student', 
      mode : 'Edit', 
      student 
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