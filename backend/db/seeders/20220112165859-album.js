'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Albums', [
      {
        title: 'My Album',
        userId: 1
      },
      {
        title: 'My Other Album',
        userId: 1
      },
      {
        title: 'My Album',
        userId: 2
      },
      {
        title: 'My Other Album',
        userId: 2
      },
      {
        title: 'My Album',
        userId: 3
      },
      {
        title: 'My Other Album',
        userId: 3
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Albums', null, {});

  }
};
