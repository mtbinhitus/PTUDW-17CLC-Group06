'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "name": "Roberta Bragg"
  }, {
    "id": 2,
    "name": "Mark Rhodes-Ousley"
  }, {
    "id": 3,
    "name": "Keith Strassberg"
  }, {
    "id": 4,
    "name": "Peter Pacheco"
  }]
  data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('Authors', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', null, {});
  }
};
