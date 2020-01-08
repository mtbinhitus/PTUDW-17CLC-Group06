'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "empty": "",
      "BookId": 1,
      "AuthorId": 1
    }, {
      "id": 2,
      "empty": "",
      "BookId": 3,
      "AuthorId": 1
    }, {
      "id": 3,
      "empty": "",
      "BookId": 1,
      "AuthorId": 3
    }, {
      "id": 4,
      "empty": "",
      "BookId": 2,
      "AuthorId": 4
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    return queryInterface.bulkInsert('BookAuthors', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookAuthors', null, {});
  }
};
