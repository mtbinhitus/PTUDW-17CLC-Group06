'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};