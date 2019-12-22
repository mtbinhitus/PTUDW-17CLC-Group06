'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "categoryName": "Network",
      "BookId": 1,
      "CategoryId": 2
    }, {
      "id": 2,
      "categoryName": "Basic Concept",
      "BookId": 2,
      "CategoryId": 4
    }, {
      "id": 3,
      "categoryName": "For Beginners",
      "BookId": 2,
      "CategoryId": 5
    }, {
      "id": 4,
      "categoryName": "Basic Concept",
      "BookId": 3,
      "CategoryId": 4
    }, {
      "id": 5,
      "categoryName": "For Beginners",
      "BookId": 3,
      "CategoryId": 5
    }, {
      "id": 6,
      "categoryName": "Computer Science",
      "BookId": 4,
      "CategoryId": 1
    }, {
      "id": 7,
      "categoryName": "Basic Concept",
      "BookId": 4,
      "CategoryId": 4
    }, {
      "id": 8,
      "categoryName": "For Beginners",
      "BookId": 4,
      "CategoryId": 5
    }, {
      "id": 9,
      "categoryName": "Software Engineering",
      "BookId": 5,
      "CategoryId": 3
    }, {
      "id": 10,
      "categoryName": "Basic Concept",
      "BookId": 5,
      "CategoryId": 4
    }, {
      "id": 11,
      "categoryName": "For Beginners",
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
