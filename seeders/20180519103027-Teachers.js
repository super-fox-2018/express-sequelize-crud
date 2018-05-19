'use strict';

const fs = require('fs')

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
    let teacherSeed = fs.readFileSync('teacher.csv','utf8').split('\n')
    let teacherSeedArray = []

    for(let i = 0; i < teacherSeed.length; i++){
      teacherSeed[i] = teacherSeed[i].split(',')
      let newObj = {
        first_name:teacherSeed[i][0],
        last_name:teacherSeed[i][1],
        email:teacherSeed[i][2],
        createdAt:new Date(),
        updatedAt:new Date()
      }
      teacherSeedArray.push(newObj)
    }

    return queryInterface.bulkInsert('Teachers',teacherSeedArray, {});
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
