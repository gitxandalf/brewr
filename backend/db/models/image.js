'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};