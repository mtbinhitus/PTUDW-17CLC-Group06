'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfflineReader = sequelize.define('OfflineReader', {
    Email: DataTypes.STRING,
    FName: DataTypes.STRING,
    LName: DataTypes.STRING,
    Faculty: DataTypes.STRING,
    Program: DataTypes.STRING,
    Status: DataTypes.BOOLEAN
  }, {});
  OfflineReader.associate = function(models) {
    // associations can be defined here
  };
  return OfflineReader;
};