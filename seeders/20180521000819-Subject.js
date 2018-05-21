'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Subjects', [{
      subjectName: 'Computer Science',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName: 'Psychology',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName: 'Art',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName: 'Math',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
