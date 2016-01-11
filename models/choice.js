"use strict";

module.exports = function(sequelize, DataTypes) {
  var Choice = sequelize.define("Choice", {
    choiceText: DataTypes.STRING,
    numChosen: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0
    }
  }, {
    classMethods: {
      associate: function(models) {
        Choice.belongsTo(models.Question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Choice.hasMany(models.Response);
      }
    }
  });

  return Choice;
};
