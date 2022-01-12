'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};