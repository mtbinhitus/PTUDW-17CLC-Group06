'use strict';
module.exports = (sequelize, DataTypes) => {
  const BorrowedRequest = sequelize.define('BorrowedRequest', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    status: DataTypes.BOOLEAN,
    datesend: DataTypes.DATE,
    dateget: DataTypes.DATE
  }, {});
  BorrowedRequest.associate = function(models) {
    // associations can be defined here
    BorrowedRequest.belongsTo(models.User);
    BorrowedRequest.belongsTo(models.Book);
  };
  return BorrowedRequest;
};