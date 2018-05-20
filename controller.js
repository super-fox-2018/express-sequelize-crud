const model = require('./models');
const teacher = model.Teacher
const student = model.Student
const subject = model.Subject

class Controller {


	//STUDENTS
	static showStudents() {
		return student.findAll()
	}

	static addStudents(obj) {
		let studentku = student.build({
			first_name: obj.first_name,
			last_name: obj.last_name,
			email: obj.email
		})
		return studentku.save();
	}


	static cariId(id) {
		return student.findById(id)
	}


	static delete(id) {
		return student.findById(id)
			.then(function (student) {
				return student.destroy()
			})

			.catch(err => {
				console.log(err.message);
			});
	}


	static update(obj) {
		return student.findOne({
			where: {
				id: obj.id
			}
		}).then(student => {

			student.first_name = obj.first_name
			student.last_name = obj.last_name
			student.email = obj.email
			return student.save()

		})

	}



	// -------  TEACHERS
	static showTeachers() {
		return teacher.findAll()
	}

	static addTeachers(obj) {
		let teacherku = teacher.build({
			first_name: obj.first_name,
			last_name: obj.last_name,
			email: obj.email
		})
		return teacherku.save();
	}

	static cariIdTeachers(id) {
		return teacher.findById(id)
	}

	static deleteTeachers(id) {
		return teacher.findById(id)
			.then(function (teacher) {
				return teacher.destroy()
			})

			.catch(err => {
				console.log(err.message);
			});
	}



	static updateTeachers(obj) {
		return teacher.findOne({
			where: {
				id: obj.id
			}
		}).then(teacher => {

			teacher.first_name = obj.first_name
			teacher.last_name = obj.last_name
			teacher.email = obj.email
			return teacher.save()

		})

	}




	// -----------  Subject
	static showSubject() {
		return subject.findAll()
	}

	static addSubjects(obj) {
		let subjectku = subject.build({
			subject_name: obj.subject_name,

		})
		return subjectku.save();
	}

	static cariIdSubjects(id) {
		return subject.findById(id)
	}

	static deleteSubjects(id) {
		return subject.findById(id)
			.then(function (subject) {
				return subject.destroy()
			})

			.catch(err => {
				console.log(err.message);
			});
	}

	static updateSubjects(obj) {
		return subject.findOne({
			where: {
				id: obj.id
			}
		}).then(subject => {

			subject.subject_name = obj.subject_name

			return subject.save()

		})

	}


}

module.exports = Controller
