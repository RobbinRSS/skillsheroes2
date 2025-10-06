"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "",
      [
        {
          song_title: "pipico",
          description: "im cooked",
          startdate: new Date(),
          enddate: new Date(),
          rasterday: new Date(),
          maxapplicants: 20,
        },
        {
          song_title: "innovatie",
          description: "im cooked",
          startdate: new Date(),
          enddate: new Date(),
          rasterday: new Date(),
          maxapplicants: 20,
        },
        {
          song_title: "nnuh uh",
          description: "im cooked",
          startdate: new Date(),
          enddate: new Date(),
          rasterday: new Date(),
          maxapplicants: 20,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("keuzedelen", null, {});
  },
};
