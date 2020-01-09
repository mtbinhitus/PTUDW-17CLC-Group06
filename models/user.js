'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pass: DataTypes.STRING,
    lname: DataTypes.STRING,
    fname: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.TEXT,
    isadmin: DataTypes.BOOLEAN,
    token: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    block: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Borrowed);
    User.hasMany(models.BorrowedRequest);
  };
  return User;
};