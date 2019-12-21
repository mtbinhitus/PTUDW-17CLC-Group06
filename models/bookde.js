'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookDe = sequelize.define('BookDe', {
    Location: DataTypes.STRING,
    Status: DataTypes.BOOLEAN
  }, {});
  BookDe.associate = function(models) {
    // associations can be defined here
  };
  return BookDe;
};