'use strict';
module.exports = (sequelize, DataTypes) => {
  const BorrowedRequest = sequelize.define('BorrowedRequest', {
    dateget: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  BorrowedRequest.associate = function(models) {
    // associations can be defined here
    BorrowedRequest.belongsTo(models.Book);
    BorrowedRequest.belongsTo(models.User);
    
  };
  return BorrowedRequest;
};