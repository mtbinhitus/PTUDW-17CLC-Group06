'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = [
      {
        isbn13: "123",
        isbn10: "456",
        title: "Nhap mon lap trinh",
        edition: "1",
        pubYear: new Date(19, 12, 22),
        publisher: "Trinh Binh",
        amount: 22
      },
      {
        isbn13: "123",
        isbn10: "456",
        title: "Co so du lieu",
        edition: "1",
        pubYear: new Date(19, 12, 22),
        publisher: "Trinh Binh",
        amount: 22
      },
      {
        isbn13: "123",
        isbn10: "456",
        title: "Phat trien ung dung web",
        edition: "1",
        pubYear: new Date(19, 12, 22),
        publisher: "Trinh Binh",
        amount: 22
      },
      {
        isbn13: "123",
        isbn10: "456",
        title: "Phat trien ung dung Java",
        edition: "1",
        pubYear: new Date(19, 12, 22),
        publisher: "Trinh Binh",
        amount: 22
      },
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