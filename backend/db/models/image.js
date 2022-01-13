'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
    albumId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: { model: "Albums" }
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING(200),
      validate: {
        len: [10, 200]
      },
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
      default: ''
    }

  }, {});
  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.User, { foreignKey: 'userId' })
    Image.belongsTo(models.Album, { foreignKey: 'albumId' })
    Image.hasMany(models.Comment, { foreignKey: 'imageId', onDelete: 'CASCADE', hooks: true })
  };
  return Image;
};