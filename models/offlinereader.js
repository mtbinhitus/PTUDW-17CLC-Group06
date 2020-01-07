'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfflineReader = sequelize.define('OfflineReader', {
    lname: DataTypes.STRING,
    fname: DataTypes.STRING,
    email: DataTypes.STRING,
    faculty: DataTypes.STRING,
    program: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  OfflineReader.associate = function(models) {
    // associations can be defined here
  };
  return OfflineReader;
};