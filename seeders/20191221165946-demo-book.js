'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = [{
      "id": 1,
      "isbn13": "217159685-6",
      "isbn10": "415977316-8",
      "title": "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
      "edition": 28,
      "pubYear": "2/26/2019",
      "publisher": "luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
      "amount": 29
    }, {
      "id": 2,
      "isbn13": "343364111-0",
      "isbn10": "462121316-4",
      "title": "nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
      "edition": 82,
      "pubYear": "4/20/2019",
      "publisher": "eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
      "amount": 8
    }, {
      "id": 3,
      "isbn13": "179751315-X",
      "isbn10": "429568962-9",
      "title": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est",
      "edition": 29,
      "pubYear": "10/23/2019",
      "publisher": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie",
      "amount": 10
    }]
    data.map(item => {
     item.createdAt = Sequelize.literal('NOW()');
     item.updatedAt = Sequelize.literal('NOW()');
     return item;
   })
   return queryInterface.bulkInsert('Books', data, {});
   },
 
   down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', null, {});
   }
 }; 