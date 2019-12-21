'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrowed = sequelize.define('Borrowed', {
    Amount: DataTypes.INTEGER,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    Status: DataTypes.BOOLEAN
  }, {});
  Borrowed.associate = function(models) {
    // associations can be defined here
 
  };
  return Borrowed;
};