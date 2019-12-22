'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.BookCategory);
    
  };
  return Category;
};