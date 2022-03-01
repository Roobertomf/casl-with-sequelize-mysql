require("dotenv").config();

module.exports = {
  database: {
    username: "root",
    password: "root",
    port: process.env.DATABASE_PORT,
    database: "caslPermissions",
    host: "localhost",
    dialect: "mysql",
  },
};
