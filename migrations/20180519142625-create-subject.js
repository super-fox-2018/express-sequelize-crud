'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subject_name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date,
      }
    }),
  down: (queryInterface, Sequelize) => 
    queryInterface.dropTable('Subjects')
};