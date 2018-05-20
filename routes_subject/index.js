//router
const express = require('express');
const router = express();
router.set("view engine", "ejs");
router.set("views", __dirname + "/views");

//model
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Model = require('../models');
const Subject = Model.subject;




//body parser
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req,res){
    res.send('welcome to school web page - subject')
})

router.get('/subjects', function(req,res){
        Subject
           .findAll({
                 attributes : ['id','subject_name'],
                 raw: true
                })
           .then(function(subjects){
                 res.render('subject', {
                 thead : ["No", "subject_name"],
                 title : "Data Subject",
                 link  : "/subject/add",
                 subject : subjects,
                 link_edit : "/subject/",
                 link_delete : "/subject_delete/" 
                })    
        })   
})

router.get('/subject/add', function(req,res){
    res.render('form_subject')
})

router.post('/subject/add', urlencodedParser, function(req, res){
   let s_name = JSON.stringify(req.body.subject_name);
        Subject
        .create({
           subject_name: s_name,     
        })
        .then(function(){
          res.send('added success');
        })
        .catch(function(){
          res.send('Data Invalid');
        })
})

router.get('/subject/:id',function(req, res){
    let id_subject = req.params.id;
    Subject
    .findAll({attributes : ['id','subject_name'],
              where :{
                id :id_subject,
             
                },
               raw : true,
     })
     .then(function(subjects){
        res.render('edit',{
             title : "EDIT DATA STUDENT",
             link : "/subjects",
             subject: subjects[0],
               
        });
        
     })

})

router.post('/edit/subject', urlencodedParser, function(req, res){
        let id_subject = req.body.id;
        let subject_name = JSON.stringify(req.body.subject_name);
        Subject.update({
                   subject_name : subject_name,
                   updatedAt : new Date(),
                },{
                     where : {
                     id :{
                        [Op.eq] : id_subject,
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

router.get('/subject_delete/:id',function(req, res){
        let id_subject = req.params.id;
        Subject
        .destroy({where:{id:id_subject}})
         .then(function(){
            res.send('DATA DELETED!')
         })
    
    })






module.exports = router;