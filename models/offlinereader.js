'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfflineReader = sequelize.define('OfflineReader', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    email: { 
      type: DataTypes.STRING,
      isEmail:true,
      unique:true
     },
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    faculty: DataTypes.STRING,
    program: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  OfflineReader.associate = function(models) {
    // associations can be defined here
  };
  return OfflineReader;
};