'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = [
      {
        ISBN13: "123",
        ISBN10: "456",
        Title: "Khong biet gi luon huhu",
        Edition: "1",
        PubYear: "22/12/2019",
        Publisher: "Trinh Binh",
        Amount: "22"
      },
      {
        ISBN13: "123",
        ISBN10: "456",
        Title: "Khong biet gi luon huhu",
        Edition: "1",
        PubYear: "22/12/2019",
        Publisher: "Trinh Binh",
        Amount: "22"
      }
    ]
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