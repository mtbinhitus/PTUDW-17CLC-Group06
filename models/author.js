'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    Name: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};