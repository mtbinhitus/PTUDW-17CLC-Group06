'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrowed = sequelize.define('Borrowed', {
    amount: DataTypes.INTEGER,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  Borrowed.associate = function(models) {
    // associations can be defined here
    Borrowed.belongsTo(models.Book);
    Borrowed.belongsTo(models.User);
  };
  return Borrowed;
};