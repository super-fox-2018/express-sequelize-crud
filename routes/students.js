const express = require('express');
const routes = express.Router();
const models = require('../models')
const Student = models.Student;

routes.get('/students', (req, res) => {
    Student.findAll()
        .then(function (students) {
            res.render('showPages', { pages: 'Student', data: students });
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        })
})
routes.get('/students/add', (req, res) => {
    res.render('formInput', {pages: 'Student', action:'Add', message:null, data:{}});
});


routes.get('/students/edit', (req, res) => {
    res.render('formInput');
});
routes.get('/students/edit/:id', (req, res) => {
    let id = req.params.id;
    console.log(routes.path);
    Student.findById(id)
        .then((student) => {
            if (student) {
                res.render('formInput', {pages: 'Student', action:'Edit', message:null,  data: student});
            }
        })
        .catch(function(err){
            res.render('showMsg',{message: err.message})
        })
});

routes.get('/students/delete/:id', (req,res) =>{
    let id = req.params.id;
    Student.destroy({
        where: {id}
    })
    .then((result)=>{
        res.render('showMsg',{message: 'Delete data student success!'})
    })
    .catch((err)=>{
        res.render('showMsg',{message: err.message})
    })
})

routes.post('/students/edit/:id', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let id = req.params.id;
    Student.update(
        {
            firstName: firstName,
            lastName: lastName,
            email: email
        },
        { where: { id: id } }
    )
        .then(function (result) {
            res.render('formInput', {pages: 'Student', action:'Edit', message:"Student data has updated",  data: result});
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        });
});

routes.post('/students/add', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    Student.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
        .then(function (student) {
            res.render('formInput', {pages: 'Student', action:'Add', message:'Add student success!', data:{}});
        })
        .catch(function (err) {
            res.render('showMsg',{message: err.message})
        })
})
module.exports = routes;