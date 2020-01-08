'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "empty": "",
      "BookId": 1,
      "CategoryId": 2
    }, {
      "id": 2,
      "empty": "",
      "BookId": 2,
      "CategoryId": 1
    }, {
      "id": 3,
      "empty": "",
      "BookId": 3,
      "CategoryId": 3
    }, {
      "id": 4,
      "empty": "",
      "BookId": 2,
      "CategoryId": 3
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
