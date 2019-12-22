'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "amount": 1,
      "start_date": "10/02/2017",
      "end_date": "10/08/2018",
      "status": true,
      "BookId": 1,
      "UserId": 2
    }, {
      "id": 2,
      "amount": 1,
      "start_date": "10/02/2017",
      "end_date": "10/08/2018",
      "status": true,
      "BookId": 2,
      "UserId": 2
    }, {
      "id": 3,
      "amount": 1,
      "start_date": "10/02/2017",
      "end_date": "10/08/2018",
      "status": false,
      "BookId": 1,
      "UserId": 1
    }, {
      "id": 4,
      "amount": 1,
      "start_date": "10/02/2017",
      "end_date": "10/08/2018",
      "status": true,
      "BookId": 4,
      "UserId": 3
    }, {
      "id": 5,
      "amount": 1,
      "start_date": "10/02/2017",
      "end_date": "10/08/2018",
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
