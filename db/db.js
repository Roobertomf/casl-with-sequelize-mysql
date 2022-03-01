const { Sequelize } = require("sequelize");
const { database } = require("../config.js");

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    port: database.port,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
