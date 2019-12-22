'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = [{
      "id": 1,
      "isbn13": "9780072226973",
      "isbn10": "0072226978",
      "title": "Network Security - The Complete Reference",
      "edition": 1,
      "pubYear": "2004",
      "publisher": "Osborne",
      "haveCD": false,
      "amount": 3
    }, {
      "id": 2,
      "isbn13": "9781558603394",
      "isbn10": "1558603395",
      "title": "Parallel Programming with MPI",
      "edition": 1,
      "pubYear": "1997",
      "publisher": "Morgan Kaufmann",
      "haveCD": false,
      "amount": 2
    }, {
      "id": 3,
      "isbn13": "9780123706065",
      "isbn10": "0123706068",
      "title": "Computer Organization and Design: The Hardware/Software Interface",
      "edition": 3,
      "pubYear": "2007",
      "publisher": "Morgan Kaufmann",
      "haveCD": true,
      "amount": 1
    }, {
      "id": 4,
      "isbn13": "9780133760064",
      "isbn10": "0133760065",
      "title": "Computer Science: An Overview",
      "edition": 12,
      "pubYear": "2014",
      "publisher": "Pearson",
      "haveCD": true,
      "amount": 3
    }, {
      "id": 5,
      "isbn13": "9780133943030",
      "isbn10": "0133943038",
      "title": "Software Engineering",
      "edition": 10,
      "pubYear": "2015",
      "publisher": "Pearson",
      "haveCD": false,
      "amount": 2
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