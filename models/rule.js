'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    value: DataTypes.TEXT
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};