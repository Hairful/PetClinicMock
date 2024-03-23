const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Media = sequelize.define('Media', {
    mediaID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mediaType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mediaURL: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Media;