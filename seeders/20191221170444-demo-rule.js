'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = [
      {
       Name: "Mai Thanh Binh",
       Value: "Muon 10 ngay"
      },
      {
        Name: "Trinh Thai Binh",
        Value: "Muon 20 ngay"
      },
      {
        Name: "Dinh Nguyen Hanh Dung",
        Value: "Muon 30 ngay"
      }
    ]
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