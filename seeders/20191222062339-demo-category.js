'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "name": "Computer science",
    "image": "http://dummyimage.com/192x244.jpg/5fa2dd/ffffff"
  }, {
    "id": 2,
    "name": "Network",
    "image": "http://dummyimage.com/200x233.bmp/cc0000/ffffff"
  }, {
    "id": 3,
    "name": "Software Engineering",
    "image": "http://dummyimage.com/182x226.bmp/5fa2dd/ffffff"
  }, {
    "id": 4,
    "name": "Basic Concept",
    "image": "http://dummyimage.com/216x226.jpg/5fa2dd/ffffff"
  }, {
    "id": 5,
    "name": "For Beginners",
    "image": "http://dummyimage.com/138x229.bmp/5fa2dd/ffffff"
  }]
  data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('Categories', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', null, {});
  }
};