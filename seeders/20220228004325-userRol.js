"use strict";
const userRol = [];
let toggle = true;
for (let index = 0; index < 5; index++) {
  userRol.push({
    rolId: toggle ? 1 : 2,
    userId: index + 1,
  });
  toggle = !toggle;
}
//console.log(userRol);
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_has_roles", userRol, {});
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
