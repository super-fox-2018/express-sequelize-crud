'use strict';
module.exports = (sequelize, DataTypes) => {
  var dataStudent = sequelize.define('dataStudent', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:  {
      type: DataTypes.STRING,
      validate: {
        isUnique : function(email,cb){
          dataStudent.findOne({where:{email : email}})
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
  dataStudent.associate = function(models) {
    // associations can be defined here
  };
  return dataStudent;
};