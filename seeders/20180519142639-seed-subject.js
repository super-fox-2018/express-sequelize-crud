'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert('Subjects', [
      { subject_name: 'Kimia' },
      { subject_name: 'Ekonomi' },
  ], {}),

  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('Subjects', null, {})
};
