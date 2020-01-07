'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    sumary: DataTypes.TEXT,
    imgpath: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.BookCategory);
  };
  return Category;
};