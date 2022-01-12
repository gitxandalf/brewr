'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};