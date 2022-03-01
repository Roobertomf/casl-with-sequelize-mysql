const express = require("express");
const sequelize = require("./db/db.js");
const User = require("./models/Usuario");

//const db = require("./models/index");
require("./assosiations");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(port);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Conexion exitosa`);
  })
  .catch((error) => {
    console.log(error);
  });
