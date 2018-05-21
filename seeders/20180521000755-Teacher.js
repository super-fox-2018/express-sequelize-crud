'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Teachers', [{
      firstName: 'Joseph',
      lastName: 'Gardon',
      email: 'josgar@edu.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Leandra',
      lastName: 'Kevin',
      email: 'leakev@edu.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Melvin',
      lastName: 'Leo',
      email: 'melle@edu.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Van',
      lastName: 'Houten',
      email: 'chocolate@edu.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Teachers', null, {});
    */
  }
};
