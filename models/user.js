'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Pass: DataTypes.STRING,
    FName: DataTypes.STRING,
    LName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Avatar: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    Token: DataTypes.STRING,
    Status: DataTypes.BOOLEAN,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Borrowed);
    User.hasMany(models.BorrowedRequest);
  };
  return User;
};