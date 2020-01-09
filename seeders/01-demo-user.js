'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   let data = [{
    "id": 1,
    "pass": "7BLksPup",
    "fname": "Norris",
    "lname": "Drinkhill",
    "email": "ndrinkhill0@addthis.com",
    "avatar": null,
    "isadmin": false,
    "token": null,
    "status": true,
    "block": true
  }, {
    "id": 2,
    "pass": "xBrcwpa",
    "fname": "Albertina",
    "lname": "Jerche",
    "email": "ajerche1@tiny.cc",
    "avatar": null,
    "isadmin": true,
    "token": null,
    "status": true,
    "block": true
  }, {
    "id": 3,
    "pass": "2PgGRkJ2z2p",
    "fname": "Isador",
    "lname": "Overnell",
    "email": "iovernell2@bloglines.com",
    "avatar": null,
    "isadmin": true,
    "token": null,
    "status": false,
    "block": false
  }]
   data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', null, {});
  }
};
