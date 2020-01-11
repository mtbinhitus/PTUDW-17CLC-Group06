'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = [{
      "id": 1,
      "isbn13": "9780072226973",
      "isbn10": "0072226978",
      "title": "Network Security - The Complete Reference",
      "edition": 1,
      "pubyear": 2004,
      "publisher": "Osborne",
      "amount": 3,
      "authors": "Roberta Bragg,Keith Strassberg",
      "categories": "Network",
      "imgpath": "http://dummyimage.com/182x226.bmp/5fa2dd/ffffff"
    }, {
      "id": 2,
      "isbn13": "9781558603394",
      "isbn10": "1558603395",
      "title": "Parallel Programming with MPI",
      "edition": 1,
      "pubyear": 1997,
      "publisher": "Morgan Kaufmann",
      "amount": 2,
      "authors": "Peter Pacheco",
      "categories": "Software Engineering",
      "imgpath": "http://dummyimage.com/182x226.bmp/5fa2dd/ffffff"
    }, {
      "id": 3,
      "isbn13": "9780123706065",
      "isbn10": "0123706068",
      "title": "Computer Organization and Design",
      "edition": 3,
      "pubyear": 2007,
      "publisher": "Morgan Kaufmann",
      "amount": 1,
      "authors": "Roberta Bragg",
      "categories": "Software Engineering",
      "imgpath": "http://dummyimage.com/182x226.bmp/5fa2dd/ffffff"
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