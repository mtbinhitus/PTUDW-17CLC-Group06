'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "email": "mvallow0@java.com",
    "password": "JD0pVC",
    "fname": "Merrel",
    "lname": "Vallow",
    "status": true
  }, {
    "id": 2,
    "email": "wgreenleaf1@ehow.com",
    "password": "XSzJ8PKDJqwF",
    "fname": "Wald",
    "lname": "Greenleaf",
    "status": true
  }, {
    "id": 3,
    "email": "agerbi2@fema.gov",
    "password": "3dMN9o3Q2l",
    "fname": "Alex",
    "lname": "Gerbi",
    "status": true
  }, {
    "id": 4,
    "email": "acotherill3@home.pl",
    "password": "l6fuKLg",
    "fname": "Alisander",
    "lname": "Cotherill",
    "status": false
  }, {
    "id": 5,
    "email": "nwormald4@howstuffworks.com",
    "password": "pNg65b",
    "fname": "Nathalia",
    "lname": "Wormald",
    "status": false
  }]
  data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('Registers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Registers', null, {});
  }
};