'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
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
          Student.findOne({ where: { email: value } })
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
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};