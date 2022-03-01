const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");

class User_role extends Model {}
User_role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rolId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "user_has_role",
    timestamps: false,
  }
);
module.exports = User_role;
