const model = require('../models');
let student = model.dataStudent

class Controller{
    constructor(){

    }

 
    static list(){
        return student.findAll();
    }

    static add(obj) {
        let data = student.build({
          first_name: obj.first_name,
          last_name: obj.last_name,
          email: obj.email
        })
        return data.save();
      }
    
      static deleteStudents(id) {
		return student.findById(id)
			.then(function (student) {
				return student.destroy()
			})

			.catch(err => {
				console.log(err.message);
			});
	}
}

module.exports = Controller