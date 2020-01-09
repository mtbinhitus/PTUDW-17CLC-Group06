'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookCategory = sequelize.define('BookCategory', {
    empty: DataTypes.STRING
  }, {});
  BookCategory.associate = function(models) {
    // associations can be defined here
    BookCategory.belongsTo(models.Category);
    BookCategory.belongsTo(models.Book);
  };
  return BookCategory;
};