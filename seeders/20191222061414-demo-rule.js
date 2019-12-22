'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "name": "Gael de Guise",
    "value": "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales"
  }, {
    "id": 2,
    "name": "Sarine Pumfrey",
    "value": "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies"
  }, {
    "id": 3,
    "name": "Collin Bromley",
    "value": "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut"
  }, {
    "id": 4,
    "name": "Tedie Boutcher",
    "value": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum"
  }, {
    "id": 5,
    "name": "Phillie Kempson",
    "value": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede"
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
