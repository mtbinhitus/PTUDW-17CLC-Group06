'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "dateget": "20/02/2020",
      "status": true,
      "BookId": 1,
      "UserId": 2
    }, {
      "id": 2,
      "dateget": "21/02/2020",
      "status": true,
      "BookId": 2,
      "UserId": 1
    }, {
      "id": 3,
      "dateget": "19/02/2020",
      "status": false,
      "BookId": 3,
      "UserId": 3
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    return queryInterface.bulkInsert('BorrowedRequests', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BorrowedRequests', null, {});
  }
};
