const { queryInterface } = require("sequelize");
("use strict");
const rols = [{ nombre: "admin" }, { nombre: "nonAdmin" }];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("rols", rols, {});

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
