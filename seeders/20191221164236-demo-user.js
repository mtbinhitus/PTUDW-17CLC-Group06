'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   let data = [
     {
      Pass: "123456",
      FName: "Trinh",
      LName: "Binh",
      Email: "1753033@student.hcmus.edu.vn",
      Avatar: "None",
      isAdmin: "false",
      Token: "",
      Status: "true",
     },
     {
      Pass: "000000",
      FName: "Mai",
      LName: "Binh",
      Email: "1753030@student.hcmus.edu.vn",
      Avatar: "None",
      isAdmin: "true",
      Token: "",
      Status: "true",
     }
   ]
   data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', null, {});
  }
};
