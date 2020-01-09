'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "name": "Borrow Book",
    "description": "2"
  }, {
    "id": 2,
    "name": "Borrow Date",
    "description": "30"
  }]
  data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('Rules', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rules', null, {});
  }
};
