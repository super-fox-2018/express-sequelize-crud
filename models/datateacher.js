'use strict';
module.exports = (sequelize, DataTypes) => {
  var dataTeacher = sequelize.define('dataTeacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique : function(email,cb){
          dataTeacher.findOne({where:{email : email}})
          .then((tes)=>{
            if(tes == undefined){
              cb()
            }
            else{
              cb('email has already taken')
            }
          })
        },
        isEmail:{
          args : true,
          msg :'email is not valid'
        }  
      }
    }
  }, {});
  dataTeacher.associate = function(models) {
    // associations can be defined here
  };
  return dataTeacher;
};