'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.getAllData = function(){
    return Student.findAll()
  }
  Student.addData = function(student) {
    return Student.create({first_name:student.first_name, last_name:student.last_name,email:student.email})
  }
  Student.getOneById = function(id){
    return Student.find({where:{id:id}})
  }
  Student.updateData = function(studentUpdate){
    return Student.findOne({where:{id:studentUpdate.id}}).then(student =>{
      if(student){
          student.first_name = studentUpdate.first_name
          student.last_name = studentUpdate.last_name
          student.email = studentUpdate.email
          return student.save()
      }
    })
  }
  Student.deleteData = function(id){
    return Student.destroy({where:{id:id}})
  }
  return Student;
};