'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
  };
  Subject.getAllData = function(){
    return Subject.findAll()
  }
  Subject.addData = function(subject) {
    return Subject.create({subject_name:subject.subject_name})
  }
  Subject.getOneById = function(id){
    return Subject.find({where:{id:id}})
  }
  Subject.updateData = function(subjectUpdate){
    return Subject.findOne({where:{id:subjectUpdate.id}}).then(subject =>{
      if(subject){
          subject.subject_name = subjectUpdate.subject_name
          return subject.save()
      }
    })
  }
  Subject.deleteData = function(id){
    return Subject.destroy({where:{id:id}})
  }
  return Subject;
};