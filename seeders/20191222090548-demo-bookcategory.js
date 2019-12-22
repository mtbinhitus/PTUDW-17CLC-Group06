'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "BookId": 1,
      "CategoryId": 2
    }, {
      "id": 2,
      "BookId": 2,
      "CategoryId": 4
    }, {
      "id": 3,
      "BookId": 2,
      "CategoryId": 5
    }, {
      "id": 4,
      "BookId": 3,
      "CategoryId": 4
    }, {
      "id": 5,
      "BookId": 3,
      "CategoryId": 5
    }, {
      "id": 6,
      "BookId": 4,
      "CategoryId": 1
    }, {
      "id": 7,
      "BookId": 4,
      "CategoryId": 4
    }, {
      "id": 8,
      "BookId": 4,
      "CategoryId": 5
    }, {
      "id": 9,
      "BookId": 5,
      "CategoryId": 3
    }, {
      "id": 10,
      "BookId": 5,
      "CategoryId": 4
    }, {
      "id": 11,
      "BookId": 5,
      "CategoryId": 5
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    return queryInterface.bulkInsert('BookCategories', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookCategories', null, {});
  }
};
