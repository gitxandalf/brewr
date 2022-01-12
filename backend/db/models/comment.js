'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Users"}
    },
    imageId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Images"}
    },
    comment: {
      allowNull: false,
      type: DataTypes.TEXT,
      default: ""
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Image, { foreignKey: 'imageId' })
  };
  return Comment;
};