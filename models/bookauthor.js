'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define('BookAuthor', {
    Order: DataTypes.STRING
  }, {});
  BookAuthor.associate = function(models) {
    // associations can be defined here
  };
  return BookAuthor;
};