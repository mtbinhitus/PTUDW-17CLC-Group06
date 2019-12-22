'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookCategory = sequelize.define('BookCategory', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    categoryName: DataTypes.STRING
  }, {});
  BookCategory.associate = function(models) {
    // associations can be defined here
    BookCategory.belongsTo(models.Category);
    BookCategory.belongsTo(models.Book);
  };
  return BookCategory;
};