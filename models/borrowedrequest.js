'use strict';
module.exports = (sequelize, DataTypes) => {
  const BorrowedRequest = sequelize.define('BorrowedRequest', {
    Status: DataTypes.BOOLEAN,
    DateGet: DataTypes.DATE
  }, {});
  BorrowedRequest.associate = function(models) {
    // associations can be defined here
  };
  return BorrowedRequest;
};