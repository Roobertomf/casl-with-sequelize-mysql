const { Ability, AbilityBuilder, ForbiddenError } = require("@casl/ability");
const {
  searchUser,
  searchRole,
  searchPermission,
  permissionName,
} = require("./dbQuerys");

const findUser = async () => {
  const user = await searchUser("test1");
  const userRole = await searchRole(user.id);
  const rolePermission = await searchPermission(userRole.rolId);
  const p = await permissionName(rolePermission);
  return {
    id: user.id,
    nombre: user.nombre,
    rol: userRole.rol,
    permissions: p,
  };
};

const defineAbility = (user = {}) => {
  const { can, cannot, build } = new AbilityBuilder(Ability);
  // actions create, read,update,delete

  if (user.rol === "admin") {
    console.log("admin");
    can("manage", "all");
  } else {
    for (const permission of user.permissions) {
      can(permission, "Post");
    }
    /*  can("read", "Post");
    can("update", "Post", ["content"], { authorId: user.id }); // solo si les pertenece
    cannot("delete", "Post").because("Only teachers can delete posts"); */
  }
  /*  can("create", "Posts");
    can("update", "Posts");
    can("delete", "Posts"); */

  return build();
};
const main = async () => {
  const usuario = await findUser();

  const ability = defineAbility(usuario);

  const isAllowed = ability.can("create", "Post");
  console.log(isAllowed);
};

main();
