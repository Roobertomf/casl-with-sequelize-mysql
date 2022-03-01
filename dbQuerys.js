const sequelize = require("./db/db.js");
const User = require("./models/Usuario");
const User_role = require("./models/User_has_role");
const Role_permissions = require("./models/Role_permissions");
const Permission = require("./models/Permission");
const Rol = require("./models/Rol");

const searchUser = async (name) => {
  const { dataValues } = await User.findOne({ where: { nombre: name } });
  const { id, nombre } = dataValues;
  return { id, nombre };
};

const searchRole = async (userid) => {
  const { dataValues } = await User_role.findOne({ where: { userId: userid } });
  const { userId, rolId } = dataValues;
  const { dataValues: rol } = await Rol.findOne({ where: { id: rolId } });

  return { rolId, rol: rol.nombre };
};

const searchPermission = async (rolId) => {
  const info = await Role_permissions.findAll({
    where: { rolId },
  });
  const permissions = [];
  for (const i of info) {
    const { dataValues } = i;
    permissions.push(dataValues);
  }

  return permissions;
};

const permissionName = async (permissionId) => {
  const id = [];
  for (const permission of permissionId) {
    id.push(permission.permissionId);
  }
  const data = await Permission.findAll({ where: { id } });

  const permissions = [];
  for (const i of data) {
    const { dataValues } = i;
    permissions.push(dataValues.nombre);
  }
  return permissions;
};

module.exports = {
  searchUser,
  searchRole,
  searchPermission,
  permissionName,
};
