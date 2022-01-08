'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-Daisy',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo2@user.io',
        username: 'Demo-Dan',
        hashedPassword: bcrypt.hashSync('FGkIJV7CrJo'),
      }, {
        email: 'demo3@user.io',
        username: 'Demo-Dave',
        hashedPassword: bcrypt.hashSync('8JAb9v'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-Daisy', 'Demo-Dan', 'Demo-Dave'] }
    }, {});
  }
};