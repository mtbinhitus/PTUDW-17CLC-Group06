'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define('BookAuthor', {
    empty: DataTypes.STRING
  }, {});
  BookAuthor.associate = function(models) {
    // associations can be defined here
    BookAuthor.belongsTo(models.Book);
    BookAuthor.belongsTo(models.Author);
  };
  return BookAuthor;
};