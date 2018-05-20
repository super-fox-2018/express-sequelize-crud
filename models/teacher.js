'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
       isEmail: {
         args: true,
         msg: "Not an email"
       },
       isUnique(value, callback){
        Teacher.findOne({ where: { email: value } })
          .then(function (student) {
            if (student) {
              callback("Email alrady exist");
            } else {
              callback();
            }
          });
        }
      }
    }
  }, {timestamps:false});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};