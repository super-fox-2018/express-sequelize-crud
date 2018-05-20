//router
const express = require('express');
const router = express();
router.set("view engine", "ejs");
router.set("views", __dirname + "/views");

//model
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Model = require('../models');
const Teachers = Model.teacher;
const Student = Model.student; 



//body parser
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req,res){
    res.send('welcome to school web page')
})

router.get('/students', function(req,res){
        Student
           .findAll({
                 attributes : ['id','first_name','last_name'],
                 raw: true
                })
           .then(function(students){
                 res.render('student', {
                 thead : ["No", "first_name","last_name"],
                 title : "Data Student",
                 link  : "/student/add",
                 student : students,
                 link_edit : "/student/",
                 link_delete : "/student_delete/" 
                })    
        })   
})

router.get('/student/add', function(req,res){
    res.render('form_student')
})

router.post('/student/add', urlencodedParser, function(req, res){
   let f_name = JSON.stringify(req.body.f_name);
   let l_name = JSON.stringify(req.body.l_name);
   let email = JSON.stringify(req.body.email);
        Student
        .create({
           first_name: f_name,
           last_name : l_name,
           email: email,     
        })
        .then(function(){
          res.send('success');
        })
        .catch(function(){
          res.send('Data Invalid');
        })
})

router.get('/student/:id',function(req, res){
    let id_student = req.params.id;
    Student
    .findAll({attributes : ['id','first_name','last_name','email'],
              where :{
                id :id_student,
             
                },
               raw : true,
     })
     .then(function(students){
        res.render('edit',{
             title : "EDIT DATA STUDENT",
             link : "/students",
             student: students[0],
               
        });
        
     })

})

router.post('/edit/student', urlencodedParser, function(req, res){
        let idStudent = req.body.id;
        let first_name = JSON.stringify(req.body.first_name);
        let last_name = JSON.stringify(req.body.last_name);
        let email = JSON.stringify(req.body.email);
        //res.send(id+first_name+last_name+email);
        Student.update({
                   first_name : first_name,
                   last_name : last_name,
                   email : email,
                   updated : new Date(),
                },{
                     where : {
                     id :{
                        [Op.eq] : idStudent,
                       }
                }
        })

        .then(function(){
                res.send('success updated');
        })
        .catch(function(){
                res.send('data invalid');
        })

})

router.get('/student_delete/:id',function(req, res){
        let id_student = req.params.id;
        Student
        .destroy({where:{id:id_student}})
         .then(function(){
            res.send('DATA DELETED!')
         })
    
    })






module.exports = router;