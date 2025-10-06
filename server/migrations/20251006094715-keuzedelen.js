"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("keuzedelen", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      enddate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rasterday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      maxapplicants: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("keuzedelen");
  },
};
