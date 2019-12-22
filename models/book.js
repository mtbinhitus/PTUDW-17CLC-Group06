'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    isbn13: DataTypes.STRING,
    isbn10: DataTypes.STRING,
    title: DataTypes.STRING,
    edition: DataTypes.INTEGER,
    pubYear: DataTypes.DATE,
    publisher: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.Borrowed);
    Book.hasMany(models.BorrowedRequest);
    Book.hasMany(models.BookDe);
    Book.hasMany(models.BookAuthor);
    Book.hasMany(models.BookCategory);
  };
  return Book;
};