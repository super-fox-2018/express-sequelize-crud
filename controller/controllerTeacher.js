const model = require('../models');
let teacher = model.dataTeacher

class Controller{
    constructor(){

    }

    static list(){
        return teacher.findAll();
    }

    static add(obj) {
        let data = teacher.build({
          first_name: obj.first_name,
          last_name: obj.last_name,
          email: obj.email
        })
        return data.save();
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



}

module.exports = Controller