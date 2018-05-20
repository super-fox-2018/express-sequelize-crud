// Teachers ROUTES here

var express = require('express');
var router = express.Router();
let control = require('../controller.js')


router.get('/subjects', function (req, res) {
	control.showSubject()
		.then((subjects) => {
			res.render('datasubjects', {
				subjects: subjects
			});
		})
		.catch(err => {
			console.log(err.message);
		});
});


router.get('/subjects/add', function (req, res) {
	res.render('addsubjects');
});

router.post('/subjects/add', function (req, res) {
	let obj = {
		subject_name: req.body.subject_name,

	};

	control.addSubjects(obj)
		.then(() => {
			res.redirect('/subjects');
		})

		.catch(err => {
			console.log(err.message);
		});

});


router.get('/subjects/delete/:id', function (req, res) {
	let id = req.params.id;
	control.deleteSubjects(id)
		.then(() => {
			res.redirect('/subjects');
		})
		.catch(err => {
			console.log(err.message);
		});

});


router.get('/subjects/edit/:id', function (req, res) {
	control.cariIdSubjects(req.params.id)
		.then(function (subjects) {
			res.render('editsubjects', {
				subjects: subjects
			})
		})
		.catch(err => {
			console.log(err.message);
		});
});

router.post('/subjects/edit/:id', function (req, res) {
	let obj = {
		id: req.params.id,
		subject_name: req.body.subject_name

	};
	control.updateSubjects(obj)
		.then(() => {
			res.redirect('/subjects');
		})
		.catch(err => {
			console.log(err.message);
		});

});




module.exports = router;
