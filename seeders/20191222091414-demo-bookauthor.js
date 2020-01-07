'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "emtpy": "",
      "BookId": 1,
      "AuthorId": 1
    }, {
      "id": 2,
      "emtpy": "",
      "BookId": 3,
      "AuthorId": 1
    }, {
      "id": 3,
      "emtpy": "",
      "BookId": 1,
      "AuthorId": 3
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
