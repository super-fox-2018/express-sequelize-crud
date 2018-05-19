'use strict'
const express = require('express');
const models = require('../models');
const routes = express.Router();
const Teacher = models.Teacher;

routes.get('/teachers', (req, res) => {
    Teacher.findAll()
        .then(function (teachers) {
            res.render('showPages', { pages: 'Teacher', data: teachers });
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        })
})
routes.get('/teachers/add', (req, res) => {
    res.render('formInput', {pages: 'Teacher', action:'Add', message:null, data:{}});
});


routes.get('/teachers/edit', (req, res) => {
    res.render('formInput');
});
routes.get('/teachers/edit/:id', (req, res) => {
    let id = req.params.id;
    console.log(routes.path);
    Teacher.findById(id)
        .then((teacher) => {
            if (teacher) {
                res.render('formInput', {pages: 'Teacher', action:'Edit', message:null,  data: teacher});
            }
        })
        .catch(function(err){
            res.render('showMsg',{message: err.message})
        })
});

routes.get('/teachers/delete/:id', (req,res) =>{
    let id = req.params.id;
    Teacher.destroy({
        where: {id}
    })
    .then((result)=>{
        res.render('showMsg',{message: 'Delete data teacher success!'})
    })
    .catch((err)=>{
        res.render('showMsg',{message: err.message})
    })
})

routes.post('/teachers/edit/:id', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let id = req.params.id;
    Teacher.update(
        {
            firstName: firstName,
            lastName: lastName,
            email: email
        },
        { where: { id: id } }
    )
        .then(function (result) {
            res.render('formInput', {pages: 'Teacher', action:'Edit', message:"Teacher data has updated",  data: result});
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        });
});

routes.post('/teachers/add', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    Teacher.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
        .then(function (teacher) {
            res.render('formInput', {pages: 'Teacher', action:'Add', message:'Add teacher success!', data:{}});
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        })
})

module.exports = routes;