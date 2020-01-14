'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "name": "Computer science",
    "summary": "Is the study of processes that interact with data and that can be represented as data in the form of programs.",
    "imgpath": "http://dummyimage.com/192x244.jpg/5fa2dd/ffffff"
  }, {
    "id": 2,
    "name": "Network",
    "summary": "Is a digital telecommunications network which allows nodes to share resources. ",
    "imgpath": "http://dummyimage.com/200x233.bmp/cc0000/ffffff"
  }, {
    "id": 3,
    "name": "Software Engineering",
    "summary": "Is the systematic application of engineering approaches to the development of software.",
    "imgpath": "http://dummyimage.com/182x226.bmp/5fa2dd/ffffff"
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