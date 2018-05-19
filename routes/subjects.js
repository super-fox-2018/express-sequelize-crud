const express = require('express');
const routes = express.Router();
const models = require('../models')
const Subject = models.Subject;

routes.get('/subjects', (req, res) => {
    Subject.findAll()
        .then(function (subjects) {
            res.render('showPages', { pages: 'Subject', data: subjects });
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        })
})
routes.get('/subjects/add', (req, res) => {
    res.render('formInput', {pages: 'Subject', action:'Add', message:null, data:{}});
});


routes.get('/subjects/edit', (req, res) => {
    res.render('formInput');
});
routes.get('/subjects/edit/:id', (req, res) => {
    let id = req.params.id;
    console.log(routes.path);
    Subject.findById(id)
        .then((subject) => {
            if (subject) {
                res.render('formInput', {pages: 'Subject', action:'Edit', message:null,  data: subject});
            }
        })
        .catch(function(err){
            res.render('showMsg',{message: err.message})
        })
});

routes.get('/subjects/delete/:id', (req,res) =>{
    let id = req.params.id;
    Subject.destroy({
        where: {id}
    })
    .then((result)=>{
        res.render('showMsg',{message: 'Delete data subject success!'})
    })
    .catch((err)=>{
        res.render('showMsg',{message: err.message})
    })
})

routes.post('/subjects/edit/:id', (req, res) => {
    let subjectName = req.body.subjectName;
    let id = req.params.id;
    Subject.update(
        {
            subjectName: subjectName
        },
        { where: { id: id } }
    )
        .then(function (result) {
            res.render('formInput', {pages: 'Subject', action:'Edit', message:"Subject data has updated",  data: result});
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        });
});

routes.post('/subjects/add', (req, res) => {
    let subjectName = req.body.subjectName;
    Subject.create({
        subjectName: subjectName,
    })
        .then(function (subject) {
            res.render('formInput', {pages: 'Subject', action:'Add', message:'Add subject success!', data:{}});
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        })
})


module.exports = routes;