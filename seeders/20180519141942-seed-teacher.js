'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert('Teachers', [
      {
        first_name: 'Bambang',
        last_name: 'Suprapto',
        email: 'bambangsuprapto@sekolah.id',
      },{
        first_name: 'Rukmana',
        last_name: 'Fatmawati',
        email: 'rukmanafatmawati@sekolah.id',
      },{
        first_name: 'Butet',
        last_name: 'Naiborhu',
        email: 'butetnaiborhu@sekolah.id',
      },{
        first_name: 'Yulius',
        last_name: 'Prawiranegara',
        email: 'yuliusprawirenegara@sekolah.id',
      },
    ], {}),

  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('Teachers', null, {})
};
