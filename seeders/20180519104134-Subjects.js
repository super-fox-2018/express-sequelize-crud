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
    let subjectSeed = fs.readFileSync('subject.csv','utf8').split('\n')
    let subjectSeedArray = []

    for(let i = 0; i < subjectSeed.length; i++){
      let newObj = {
        subject_name:subjectSeed[i],
      }
      subjectSeedArray.push(newObj)
    }

    return queryInterface.bulkInsert('Subjects', subjectSeedArray, {});
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
