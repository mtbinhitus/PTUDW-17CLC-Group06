'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    ISBN13: DataTypes.STRING,
    ISBN10: DataTypes.STRING,
    Title: DataTypes.STRING,
    Edition: DataTypes.INTEGER,
    PubYear: DataTypes.DATE,
    Publisher: DataTypes.STRING,
    Amount: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};