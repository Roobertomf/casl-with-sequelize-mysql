const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
class Permission extends Model {}

Permission.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo no puede ser nulo",
        },
        /* isAlpha: {
            args: true,
            msg: "El nombre solo puede contener letras",
          }, */
        len: {
          args: [3, 255],
          msg: "El nombre tiene que ser entre 3 y 255 caracteres",
        },
      },
    },
    guard_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    isView: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "permission", timestamps: false }
);

module.exports = Permission;
