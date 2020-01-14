'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   let data = [{
    "id": 1,
    "pass": "$2a$10$g67w1iEgUn7QPk/29VbAGufzk8efLeJR2YJSEkEWABbkEgvo2mIRa",
    "fname": "Dung",
    "lname": "Nguyen",
    "email": "1753021@student.hcmus.edu.vn",
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
    "pass": "$2a$10$g67w1iEgUn7QPk/29VbAGufzk8efLeJR2YJSEkEWABbkEgvo2mIRa",
    "fname": "Dung",
    "lname": "Nguyen",
    "email": "admin@gmail.com",
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
