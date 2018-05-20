// Teachers ROUTES here

var express = require('express');
var router = express.Router();
let control = require('../controller.js')


router.get('/teachers', function (req, res) {
	control.showTeachers()
		.then((teachers) => {
			res.render('datateachers', {
				teachers: teachers
			});
		})
		.catch(err => {
			console.log(err.message);
		});
});



router.get('/teachers/add', function (req, res) {
	res.render('addteachers');
});

router.post('/teachers/add', function (req, res) {
	let obj = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	};

	control.addTeachers(obj)
		.then(() => {
			res.redirect('/teachers');
		})

		.catch(err => {
			console.log(err.message);
		});

});



router.get('/teachers/delete/:id', function (req, res) {
	let id = req.params.id;
	control.deleteTeachers(id)
		.then(() => {
			res.redirect('/teachers');
		})
		.catch(err => {
			console.log(err.message);
		});

});




router.get('/teachers/edit/:id', function (req, res) {
	control.cariIdTeachers(req.params.id)
		.then(function (teachers) {
			res.render('editteachers', {
				teachers: teachers
			})
		})
		.catch(err => {
			console.log(err.message);
		});
});

router.post('/teachers/edit/:id', function (req, res) {
	let obj = {
		id: req.params.id,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	};
	control.updateTeachers(obj)
		.then(() => {
			res.redirect('/teachers');
		})
		.catch(err => {
			console.log(err.message);
		});

});




module.exports = router;
