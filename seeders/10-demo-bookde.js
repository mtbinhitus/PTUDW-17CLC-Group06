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
      "BookId": 2
    }, {
      "id": 3,
      "location": "D17",
      "status": true,
      "BookId": 3
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
