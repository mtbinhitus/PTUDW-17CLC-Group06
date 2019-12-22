'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   let data = [{
    "id": 1,
    "password": "7BLksPup",
    "fname": "Norris",
    "lname": "Drinkhill",
    "email": "ndrinkhill0@addthis.com",
    "avatar": null,
    "isadmin": false,
    "token": null,
    "status": true
  }, {
    "id": 2,
    "password": "xBrcwpa",
    "fname": "Albertina",
    "lname": "Jerche",
    "email": "ajerche1@tiny.cc",
    "avatar": null,
    "isadmin": true,
    "token": null,
    "status": true
  }, {
    "id": 3,
    "password": "2PgGRkJ2z2p",
    "fname": "Isador",
    "lname": "Overnell",
    "email": "iovernell2@bloglines.com",
    "avatar": null,
    "isadmin": true,
    "token": null,
    "status": false
  }, {
    "id": 4,
    "password": "Q7WCtAhd",
    "fname": "Olivero",
    "lname": "Shoulders",
    "email": "oshoulders3@latimes.com",
    "avatar": null,
    "isadmin": true,
    "token": null,
    "status": true
  }, {
    "id": 5,
    "password": "qb2hwgUJfTh9",
    "fname": "Linell",
    "lname": "Ewbank",
    "email": "lewbank4@mediafire.com",
    "avatar": null,
    "isadmin": true,
    "token": null,
    "status": true
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
