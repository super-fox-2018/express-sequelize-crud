'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date
      }
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Students')
};