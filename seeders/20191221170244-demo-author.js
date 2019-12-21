'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = [
      {
       Name: "Mai Thanh Binh"
      },
      {
        Name: "Trinh Thai Binh"
      },
      {
        Name: "Dinh Nguyen Hanh Dung"
      }
    ]
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