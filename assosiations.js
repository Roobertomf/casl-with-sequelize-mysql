const User = require("./models/Usuario");
const rol = require("./models/Rol");
const permission = require("./models/Permission");
const user_role = require("./models/User_has_role");
const Role_permissions = require("./models/Role_permissions");

rol.belongsToMany(User, { through: user_role });
permission.belongsToMany(rol, { through: Role_permissions });
