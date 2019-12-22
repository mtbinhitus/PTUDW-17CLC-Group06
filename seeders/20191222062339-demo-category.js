'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "name": "Madlen Lansdale",
    "image": "http://dummyimage.com/192x244.jpg/5fa2dd/ffffff"
  }, {
    "id": 2,
    "name": "L;urette Giorgetti",
    "image": "http://dummyimage.com/200x233.bmp/cc0000/ffffff"
  }, {
    "id": 3,
    "name": "Ky Greenard",
    "image": "http://dummyimage.com/182x226.bmp/5fa2dd/ffffff"
  }, {
    "id": 4,
    "name": "Marlee Le Leu",
    "image": "http://dummyimage.com/216x226.jpg/5fa2dd/ffffff"
  }, {
    "id": 5,
    "name": "Eran Snozzwell",
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