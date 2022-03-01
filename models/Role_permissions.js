const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");

class Role_permissions extends Model {}
Role_permissions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    permissionId: {
      type: DataTypes.INTEGER,
    },
    rolId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "role_has_permission",
    timestamps: false,
  }
);
module.exports = Role_permissions;
