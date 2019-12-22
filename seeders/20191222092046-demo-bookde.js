'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "location": "D15",
      "status": false,
      "BookId": 1
    }, {
      "id": 2,
      "location": "D16",
      "status": true,
      "BookId": 1
    }, {
      "id": 3,
      "location": "D17",
      "status": true,
      "BookId": 1
    }, {
      "id": 4,
      "location": "B5",
      "status": false,
      "BookId": 2
    }, {
      "id": 5,
      "location": "B6",
      "status": true,
      "BookId": 2
    }, {
      "id": 6,
      "location": "E8",
      "status": false,
      "BookId": 3
    }, {
      "id": 7,
      "location": "A11",
      "status": false,
      "BookId": 4
    }, {
      "id": 8,
      "location": "A12",
      "status": true,
      "BookId": 4
    }, {
      "id": 9,
      "location": "A13",
      "status": true,
      "BookId": 4
    }, {
      "id": 10,
      "location": "F5",
      "status": true,
      "BookId": 5
    }, {
      "id": 11,
      "location": "F6",
      "status": true,
      "BookId": 5
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    return queryInterface.bulkInsert('BookDes', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookDes', null, {});
  }
};
