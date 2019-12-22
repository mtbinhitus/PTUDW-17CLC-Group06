'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "amount": 1,
      "start_date": "29/11/2019",
      "end_date": "29/12/2019",
      "status": true,
      "BookId": 1,
      "UserId": 2
    }, {
      "id": 2,
      "amount": 1,
      "start_date": "29/11/2019",
      "end_date": "29/12/2019",
      "status": true,
      "BookId": 2,
      "UserId": 2
    }, {
      "id": 3,
      "amount": 1,
      "start_date": "20/11/2019",
      "end_date": "20/12/2019",
      "status": false,
      "BookId": 1,
      "UserId": 1
    }, {
      "id": 4,
      "amount": 1,
      "start_date": "28/11/2019",
      "end_date": "28/12/2019",
      "status": true,
      "BookId": 4,
      "UserId": 3
    }, {
      "id": 5,
      "amount": 1,
      "start_date": "20/11/2019",
      "end_date": "20/12/2019",
      "status": true,
      "BookId": 3,
      "UserId": 5
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    return queryInterface.bulkInsert('Borroweds', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Borroweds', null, {});
  }
};
