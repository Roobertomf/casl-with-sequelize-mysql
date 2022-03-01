"use strict";
const users = [];

for (let index = 0; index < 5; index++) {
  users.push({
    nombre: `test${index}`,
    email: `test${index}@test.com`,
    password: "123456",
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", users, {});
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
