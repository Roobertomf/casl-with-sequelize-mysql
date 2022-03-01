const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
class Rol extends Model {}

Rol.init(
  {
    nombre: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "rol", timestamps: false }
);

module.exports = Rol;
