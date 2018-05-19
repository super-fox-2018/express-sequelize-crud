'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

     return queryInterface.bulkInsert('Students', [{
        first_name: 'Aldo',
        last_name: 'Prakoso',
        email: "aldo@mail.com",
        createdAt: new Date,
        updatedAt: new Date
      },{
        first_name: 'Viona',
        last_name: 'Firgo',
        email: "viona@mail.com",
        createdAt: new Date,
        updatedAt: new Date   
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
