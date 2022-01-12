'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      allowNull: false,
      type:DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    title: {
      allowNull: false,
      type:DataTypes.STRING(25),
      validate: {
        len: [1, 25]
      }
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, {foreignKey: 'userId'})
    Album.hasMany(models.Image, {foreignKey: 'albumId'})
  };
  return Album;
};