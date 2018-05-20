//router
const express = require('express');
const router = express();
router.set("view engine", "ejs");
router.set("views", __dirname + "/views");

//model
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Model = require('../models');
const Teacher = Model.teacher;
const Student = Model.student; 



//body parser
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req,res){
    res.send('welcome to school web page - teacher')
})

router.get('/teachers', function(req,res){
        Teacher
           .findAll({
                 attributes : ['id','first_name','last_name'],
                 raw: true
                })
           .then(function(teachers){
                 res.render('teacher', {
                 thead : ["No", "first_name","last_name"],
                 title : "Data Teachers",
                 link  : "/teacher/add",
                 teacher : teachers,
                 link_edit : "/teacher/",
                 link_delete : "/teacher_delete/" 
                })    
        })   
})

router.get('/teacher/add', function(req,res){
    res.render('form_teacher')
})

router.post('/teacher/add', urlencodedParser, function(req, res){
   let f_name = JSON.stringify(req.body.f_name);
   let l_name = JSON.stringify(req.body.l_name);
   let email = JSON.stringify(req.body.email);
        Teacher
        .create({
           first_name: f_name,
           last_name : l_name,
           email: email,     
        })
        .then(function(){
          res.send('addded success');
        })
        .catch(function(){
          res.send('Data Invalid');
        })
})

router.get('/teacher/:id',function(req, res){
    let id_teacher = req.params.id;
    Teacher
    .findAll({attributes : ['id','first_name','last_name','email'],
              where :{
                id :id_teacher,
             
                },
               raw : true,
     })
     .then(function(teachers){
        res.render('edit',{
             title : "EDIT DATA STUDENT",
             link : "/students",
             teacher: teachers[0],
               
        });
        
     })

})

router.post('/edit/teacher', urlencodedParser, function(req, res){
        let id_teacher = req.body.id;
        let first_name = JSON.stringify(req.body.first_name);
        let last_name = JSON.stringify(req.body.last_name);
        let email = JSON.stringify(req.body.email);
        //res.send(id+first_name+last_name+email);
        Teacher.update({
                   first_name : first_name,
                   last_name : last_name,
                   email : email,
                   updated : new Date(),
                },{
                     where : {
                     id :{
                        [Op.eq] : id_teacher,
                       }
                }
        })

        .then(function(){
                res.send('update success');
        })
        .catch(function(){
                res.send('data invalid');
        })

})

router.get('/teacher_delete/:id',function(req, res){
        let id_teacher = req.params.id;
        Teacher
        .destroy({where:{id:id_teacher}})
         .then(function(){
            res.send('DATA DELETED!')
         })
    
    })






module.exports = router;