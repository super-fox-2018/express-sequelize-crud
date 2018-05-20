'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  Teacher.getAllData = function(){
    return Teacher.findAll()
  }
  Teacher.addData = function(teacher) {
    return Teacher.create({first_name:teacher.first_name, last_name:teacher.last_name,email:teacher.email})
  }
  Teacher.getOneById = function(id){
    return Teacher.find({where:{id:id}})
  }
  Teacher.updateData = function(teacherUpdate){
    return Teacher.findOne({where:{id:teacherUpdate.id}}).then(teacher =>{
      if(teacher){
          teacher.first_name = teacherUpdate.first_name
          teacher.last_name = teacherUpdate.last_name
          teacher.email = teacherUpdate.email
          return teacher.save()
      }
    })
  }
  Teacher.deleteData = function(id){
    return Teacher.destroy({where:{id:id}})
  }
  return Teacher;
};