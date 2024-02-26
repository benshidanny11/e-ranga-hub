'use strict';
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const uuid = require('uuid');



const { v4: uuidv4 } = uuid;
dotenv.config();
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    'adminuser@erangahub.com'  
    return queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        firstname: 'admin',
        lastname:'user',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
        email: process.env.ADMIN_EMAIL,
        phonenumber:'0784871958',
        role:'SUPPER_ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {

  }
};
