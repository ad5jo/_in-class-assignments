module.exports = function (sequelize, DataTypes){
    return sequelize.define("todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  })
  var db        = require('../models');
};