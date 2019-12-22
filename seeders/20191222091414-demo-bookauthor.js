'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "order": 1,
      "authorName": "Roberta Bragg",
      "AuthorId": 1,
      "BookId": 1,
    }, {
      "id": 2,
      "order": 2,
      "authorName": "Mark Rhodes-Ousley",
      "AuthorId": 2,
      "BookId": 1
    }, {
      "id": 3,
      "order": 3,
      "authorName": "Keith Strassberg",
      "AuthorId": 3,
      "BookId": 1
    }, {
      "id": 4,
      "order": 1,
      "authorName": "Peter S. Pacheco",
      "AuthorId": 4,
      "BookId": 2
    }, {
      "id": 5,
      "order": 1,
      "authorName": "Patterson",
      "AuthorId": 5,
      "BookId": 3
    }, {
      "id": 6,
      "order": 1,
      "authorName": "Glenn Brookshear",
      "AuthorId": 6,
      "BookId": 4
    }, {
      "id": 7,
      "order": 2,
      "authorName": "Dennis Brylow",
      "AuthorId": 7,
      "BookId": 4
    }, {
      "id": 8,
      "order": 1,
      "authorName": "Ian Sommerville",
      "AuthorId": 8,
      "BookId": 5
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
