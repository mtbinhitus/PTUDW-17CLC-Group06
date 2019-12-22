'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrowed = sequelize.define('Borrowed', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    amount: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    bookTitle: DataTypes.STRING,
    isbn: DataTypes.STRING
  }, {});
  Borrowed.associate = function(models) {
    // associations can be defined here
    Borrowed.belongsTo(models.User);
    Borrowed.belongsTo(models.Book);
  };
  return Borrowed;
};