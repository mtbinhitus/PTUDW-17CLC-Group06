'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    isbn13: DataTypes.STRING,
    isbn10: DataTypes.STRING,
    title: DataTypes.STRING,
    edition: DataTypes.INTEGER,
    pubyear: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    authors: DataTypes.STRING,
    categories: DataTypes.STRING,
    imgpath: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.BookAuthor);
    Book.hasMany(models.BookCategory);
    Book.hasMany(models.BookDe);
    Book.hasMany(models.Borrowed);
    Book.hasMany(models.BorrowedRequest);
  };
  return Book;
};