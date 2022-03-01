"use strict";
const rolpermissions = [];
for (let index = 0; index < 4; index++) {
  rolpermissions.push({
    permissionId: index + 1,
    rolId: 1,
  });
}
for (let index = 0; index < 2; index++) {
  rolpermissions.push({
    permissionId: index + 1,
    rolId: 2,
  });
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("role_has_permissions", rolpermissions, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
