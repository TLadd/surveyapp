"use strict";

module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("Response", {
    guestId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Response.belongsTo(models.Question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Response.belongsTo(models.Choice, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Response;
};
