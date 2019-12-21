'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    Name: DataTypes.STRING,
    Value: DataTypes.TEXT
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};