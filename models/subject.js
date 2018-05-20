'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
    }, {timestamps:false});
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};