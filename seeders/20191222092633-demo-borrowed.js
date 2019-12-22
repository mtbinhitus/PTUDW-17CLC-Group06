'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "amount": 1,
      "start_date": "29/11/2019",
      "end_date": "29/12/2019",
      "status": true,
      "bookTitle": "Network Security - The Complete Reference",
      "isbn": "0072226978",
      "BookId": 1,
      "UserId": 2
    }, {
      "id": 2,
      "amount": 1,
      "start_date": "29/11/2019",
      "end_date": "29/12/2019",
      "status": true,
      "bookTitle": "Parallel Programming with MPI",
      "isbn": "1558603395",
      "BookId": 2,
      "UserId": 2
    }, {
      "id": 3,
      "amount": 1,
      "start_date": "20/11/2019",
      "end_date": "20/12/2019",
      "status": false,
      "bookTitle": "Network Security - The Complete Reference",
      "isbn": "0072226978",
      "BookId": 1,
      "UserId": 1
    }, {
      "id": 4,
      "amount": 1,
      "start_date": "28/11/2019",
      "end_date": "28/12/2019",
      "status": true,
      "bookTitle": "Computer Science: An Overview",
      "isbn": "0133760065",
      "BookId": 4,
      "UserId": 3
    }, {
      "id": 5,
      "amount": 1,
      "start_date": "20/11/2019",
      "end_date": "20/12/2019",
      "status": true,
      "bookTitle": "Computer Organization and Design: The Hardware/Software Interface",
      "isbn": "0123706068",
      "BookId": 3,
      "UserId": 5
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    return queryInterface.bulkInsert('Borroweds', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Borroweds', null, {});
  }
};
