const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");

class User extends Model {}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "user", timestamps: false }
);

module.exports = User;
