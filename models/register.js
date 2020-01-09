'use strict';
module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    pass: DataTypes.STRING,
    lname: DataTypes.STRING,
    fname: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Register.associate = function(models) {
    // associations can be defined here
  };
  return Register;
};