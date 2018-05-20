'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.addColumn(
      'Teachers',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    ),

  down: (queryInterface, Sequelize) => 
    queryInterface.removeColumn('Teachers', 'email')
};
