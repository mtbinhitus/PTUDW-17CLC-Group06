'use strict';
module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Register.associate = function(models) {
    // associations can be defined here
  };
  return Register;
};