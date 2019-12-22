'use strict';
module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    Email: DataTypes.STRING,
    Pass: DataTypes.STRING,
    FName: DataTypes.STRING,
    LName: DataTypes.STRING,
    Status: DataTypes.BOOLEAN
  }, {});
  Register.associate = function(models) {
    // associations can be defined here
  };
  return Register;
};