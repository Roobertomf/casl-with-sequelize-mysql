"use strict";
const permissions = [
  { nombre: "create" },
  { nombre: "read" },
  { nombre: "update" },
  { nombre: "delete" },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("permissions", permissions, {});
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
