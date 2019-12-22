'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
    Author.hasMany(models.BookAuthor);
  };
  return Author;
};