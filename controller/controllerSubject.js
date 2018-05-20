const model = require('../models');
let subject = model.subject

class Controller{
    constructor(){

    }

 
    static list(){
        return subject.findAll();
    }

    static add(obj) {
        let data = subject.build({
          subject_name: obj.subject_name
      
        })
        return data.save();
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
}

module.exports = Controller