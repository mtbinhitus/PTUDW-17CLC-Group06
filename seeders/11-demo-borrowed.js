'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "amount": 1,
      "startdate": "10/02/2017",
      "enddate": "10/08/2018",
      "status": true,
      "BookId": 1,
      "UserId": 2
    }, {
      "id": 2,
      "amount": 1,
      "startdate": "10/02/2017",
      "enddate": "10/08/2018",
      "status": true,
      "BookId": 2,
      "UserId": 1
    }, {
      "id": 3,
      "amount": 1,
      "startdate": "10/02/2017",
      "enddate": "10/08/2018",
      "status": true,
      "BookId": 3,
      "UserId": 3
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
