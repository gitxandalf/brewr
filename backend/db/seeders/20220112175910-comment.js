'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: '6',
        comment: "This beer is tasty."
      },
      {
        userId: 1,
        imageId: '5',
        comment: "This beer is yummy."
      },
      {
        userId: 2,
        imageId: '4',
        comment: "This beer is awful."
      },
      {
        userId: 2,
        imageId: '3',
        comment: "This beer is god-like."
      },
      {
        userId: 3,
        imageId: '2',
        comment: "This beer is reminiscent of foot smell."
      },
      {
        userId: 3,
        imageId: '1',
        comment: "This beer is beer."
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Comments', null, {});

  }
};
