'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Documents', {
      documentnumber: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      documenttype: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownernames: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownercontact: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stationid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Documents');
  }
};