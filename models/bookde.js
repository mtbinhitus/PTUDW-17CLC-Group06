'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookDe = sequelize.define('BookDe', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    location: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  BookDe.associate = function(models) {
    // associations can be defined here
    BookDe.belongsTo(models.Book);
  };
  return BookDe;
};