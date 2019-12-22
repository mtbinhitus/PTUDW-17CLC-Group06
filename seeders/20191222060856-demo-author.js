'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "name": "Temple Broadis"
  }, {
    "id": 2,
    "name": "Nickolai Annandale"
  }, {
    "id": 3,
    "name": "Tome Guiduzzi"
  }, {
    "id": 4,
    "name": "Dacia Shinefield"
  }, {
    "id": 5,
    "name": "Sarah Gockelen"
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
