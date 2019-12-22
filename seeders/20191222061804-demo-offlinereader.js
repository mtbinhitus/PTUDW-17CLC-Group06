'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "email": "eshuttlewood0@yandex.ru",
    "fname": "Emalee",
    "lname": "Shuttlewood",
    "faculty": "Babbleopia",
    "program": "Bauchi State University, Gadau",
    "status": true
  }, {
    "id": 2,
    "email": "jharral1@eepurl.com",
    "fname": "Joly",
    "lname": "Harral",
    "faculty": "Yakitri",
    "program": "Takamatsu University",
    "status": false
  }, {
    "id": 3,
    "email": "slamdin2@shinystat.com",
    "fname": "Seana",
    "lname": "Lamdin",
    "faculty": "Tagtune",
    "program": "National University of Internal Affairs",
    "status": false
  }, {
    "id": 4,
    "email": "bdoggerell3@amazonaws.com",
    "fname": "Bjorn",
    "lname": "Doggerell",
    "faculty": "Zoomzone",
    "program": "Babes-Bolyai University of Cluj-Napoca",
    "status": true
  }, {
    "id": 5,
    "email": "hipwell4@free.fr",
    "fname": "Hartley",
    "lname": "Ipwell",
    "faculty": "Youopia",
    "program": "Sabanci University",
    "status": true
  }]
  data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('OfflineReaders', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OfflineReaders', null, {});
  }
};