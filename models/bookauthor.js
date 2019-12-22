'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define('BookAuthor', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    order: DataTypes.STRING,
    authorName: DataTypes.STRING
  }, {});
  BookAuthor.associate = function(models) {
    // associations can be defined here
    BookAuthor.belongsTo(models.Book);
    BookAuthor.belongsTo(models.Author);
  };
  return BookAuthor;
};