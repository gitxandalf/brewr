'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};