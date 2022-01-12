'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        albumId: 1,
        imageUrl: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        content: "This is my beer. There are many like it, but this one is mine."
      },
      {
        userId: 1,
        albumId: 2,
        imageUrl: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: "This is my beer. There are many like it, but this one is mine."
      },
      {
        userId: 2,
        albumId: 3,
        imageUrl: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: "This is my beer. There are many like it, but this one is mine."
      },
      {
        userId: 2,
        albumId: 4,
        imageUrl: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        content: "This is my beer. There are many like it, but this one is mine."
      },
      {
        userId: 3,
        albumId: 5,
        imageUrl: "https://images.unsplash.com/photo-1600366060302-9fb7682b062b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: "This is my beer. There are many like it, but this one is mine."
      },
      {
        userId: 3,
        albumId: 6,
        imageUrl: "https://images.unsplash.com/photo-1594035900144-17151c9910af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        content: "This is my beer. There are many like it, but this one is mine."
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});

  }
};
