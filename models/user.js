'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    password: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: { 
     type: DataTypes.STRING,
     isEmail:true
    },
    avatar: DataTypes.STRING,
    isadmin: DataTypes.BOOLEAN,
    token: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Borrowed);
    User.hasMany(models.BorrowedRequest);
  };
  return User;
};