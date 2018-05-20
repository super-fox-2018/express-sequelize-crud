const app = require("express");
const model = require ("../models");
const Student = model.Student;
const Teacher = model.Teacher;
const Subject = model.Subject;
const routes = app.Router();

routes.get("/", function(req,res){
  res.render("Home.ejs", {home: "Welcome to: 🏡 127.0.0.1 🏡",
  paragraph: "There is no place like here."});
});

//================================STUDENTS======================================
//Get all
routes.get("/students", function(req,res){
    Student.findAll({raw:true})
    .then(student =>{
      res.render("Students.ejs", {titleStudent: 'Students Data', Data: student
    })
  })
  .catch(function(err){
    res.send(err.message);
  })
});


//Add data
routes.get("/student-add", function(req, res){
  res.render("Student-add.ejs",{titleStudent: 'Add New Student Form'});
})

routes.post("/student-add", function(req,res){
  let input = req.body;
  let firstName = "First Name: " + input.firstName;
  let lastName =  "Last Name: " +  input.lastName;
  let email = "Email:  " +  input.email;

  Student.create({
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email
  })
  .then(function(student){
    res.render("submittedStudent.ejs", {
      Submitted: "Your form has been submitted!",
      paragraph: "These are the input you have filled: ",
      displayfName: `${firstName}`,
      displaylName: `${lastName}`,
      displayEmail: `${email}`,
    });
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//Get Id as parameter from students
routes.get('/student-edit/:id', function(req, res) {
  let studentId = req.params.id;
  Student.findById(studentId).then(function(student) {
    res.render("Student-edit.ejs" ,
    {
      student: student
    });
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//Update
routes.post('/student-edit/:id', function(req, res) {
  let studentId = req.params.id;
  let input = req.body;
  let firstName = "First Name: " + input.firstName;
  let lastName =  "Last Name: " +  input.lastName;
  let email = "Email:  " +  input.email;

  Student.update({
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email
  }, {where: {id: studentId}})
  .then(function(students){
    res.render("submittedStudent.ejs",{
    Submitted: "Your form has been submitted!",
    paragraph: "These are the input you have filled: ",
    displayfName: `${firstName}`,
    displaylName: `${lastName}`,
    displayEmail: `${email}`,
  });
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//Delete
routes.get('/student-delete/:id', function(req, res) {
  let studentId = req.params.id;
  Student.destroy({where: {id: studentId}})
  .then(() =>{
  	res.redirect('/students')
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//==================================TEACHERS======================================

//Show all
routes.get("/teachers", function(req,res){
  Teacher.findAll({raw:true})
  .then(teacher =>{
    res.render("Teachers.ejs",
      {
        titleTeachers: 'Teachers Data',
        Data: teacher
      }
    )
  })
  .catch(function(err){
  res.send(err.message);
  })
});

//Add data
routes.get("/teacher-add", function(req, res){
  res.render("Teacher-add.ejs",{titleTeacher: 'Add New Teacher Form'});
})

routes.post("/teacher-add", function(req,res){
  let input = req.body;
  let firstName = "First Name: " + input.firstName;
  let lastName =  "Last Name: " +  input.lastName;
  let email = "Email:  " +  input.email;

  Teacher.create({
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email
  });

  res.render("submittedTeacher.ejs", {
    Submitted: "Your form has been submitted!",
    paragraph: "These are the input you have filled: ",
    displayfName: `${firstName}`,
    displaylName: `${lastName}`,
    displayEmail: `${email}`,
  });
});

//Edit & update
routes.get('/teacher-edit/:id', function(req, res) {
  let teacherId = req.params.id;
  Teacher.findById(teacherId)
  .then(function(teacher) {
    res.render("Teacher-edit.ejs" ,
    {
      teacher: teacher
    });
  })
  .catch(function(err){
    res.send(err.message);
  });
});

routes.post('/teacher-edit/:id', function(req, res) {
  let teacherId = req.params.id;
  let input = req.body;
  let firstName = "First Name: " + input.firstName;
  let lastName =  "Last Name: " +  input.lastName;
  let email = "Email:  " +  input.email;

  Teacher.update({
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email
  }, {where: {id: teacherId}})
  .then(function(teacher){
    res.render("submittedTeacher.ejs", {
      Submitted: "Your form has been submitted!",
      paragraph: "These are the input you have filled: ",
      displayfName: `${firstName}`,
      displaylName: `${lastName}`,
      displayEmail: `${email}`,
    });
  })
  .catch(function(err){
    res.send(err.message);
  });
});


//Delete
routes.get('/teacher-delete/:id', function(req, res) {
  let teacherId = req.params.id;
  Teacher.destroy({where: {id: teacherId}})
  .then(() =>{
  	res.redirect('/teachers')
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//====================================Subject===================================
//Show all
routes.get("/subjects", function(req,res){
  Subject.findAll({raw:true})
  .then(subject =>{
    res.render("Subjects.ejs",
      {
        titleSubject: 'Subjects Data',
        Data: subject
      }
    )
  })
  .catch(function(err){
  res.send(err.message);
  })
});

//Add data
routes.get("/subject-add", function(req, res){
  res.render("Subject-add.ejs",{titleSubject: 'Add New Subject Form'});
})

routes.post("/subject-add", function(req,res){
  Subject.create({
    subjectName: req.body.subjectName
  });

  res.render("submittedSubject.ejs", {
    Submitted: "Your form has been submitted!",
    paragraph: "These are the input you have filled: ",
    displayInput: `${req.body.subjectName}`
  });
});

//Edit & update
routes.get('/subject-edit/:id', function(req, res) {
  let subjectId = req.params.id;
  Subject.findById(subjectId)
  .then(function(subject) {
    res.render("Subject-edit.ejs" ,
    {
      subject: subject
    });
  })
  .catch(function(err){
    res.send(err.message);
  });
});

routes.post('/subject-edit/:id', function(req, res) {
  let subjectId = req.params.id;

  Subject.update({
    subjectName: req.body.subjectName,
  }, {where: {id: subjectId}})
  .then(function(subject){
    res.render("submittedSubject.ejs", {
      Submitted: "Your form has been submitted!",
      paragraph: "These are the input you have filled: ",
      displayInput: `${req.body.subjectName}`
    });
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//Delete
routes.get('/subject-delete/:id', function(req, res) {
  let subjectId = req.params.id;
  Subject.destroy({where: {id: subjectId}})
  .then(() =>{
  	res.redirect('/subjects')
  })
  .catch(function(err){
    res.send(err.message);
  });
});


module.exports = routes;