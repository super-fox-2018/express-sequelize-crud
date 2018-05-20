'use strict';
module.exports = (sequelize, DataTypes) => {
  var teacherData = sequelize.define('teacherData', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  teacherData.associate = function(models) {
    // associations can be defined here
  };
  return teacherData;
};