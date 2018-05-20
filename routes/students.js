// STUDENTS ROUTES here
var express = require('express');
var router = express.Router();
let control = require('../controller.js')


router.get('/students', function (req, res) {
	control.showStudents()
		.then((students) => {
			res.render('datastudents', {
				students: students
			});
		})
		.catch(function (err) {
			console.log(err.message)
		});
});


router.get('/students/add', function (req, res) {
	res.render('addstudents');
});

router.post('/students/add', function (req, res) {
	let obj = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	};
	control.addStudents(obj)
		.then(() => {
			res.redirect('/students');
		})
		.catch(err => {
			console.log(err.message);
		});
});


router.get('/students/delete/:id', function (req, res) {
	let id = req.params.id;
	control.delete(id)
		.then(() => {
			res.redirect('/students');
		})
		.catch(err => {
			console.log(err.message);
		});

});



router.get('/students/edit/:id', function (req, res) {
	control.cariId(req.params.id)
		.then(function (students) {
			res.render('editstudents', {
				students: students
			})
		})
		.catch(err => {
			console.log(err.message);
		});
});


router.post('/students/edit/:id', function (req, res) {
	let obj = {

		id: req.params.id,
		first_name: req.param('first_name'),
		last_name: req.param('last_name'),
		email: req.param('email')
	};
	control.update(obj)
		.then(() => {
			res.redirect('/students');
		})
		.catch(err => {
			console.log(err.message);
		});

});


module.exports = router;
