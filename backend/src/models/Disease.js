const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Disease = sequelize.define('Disease', {
    diseaseID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    diseaseType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diseaseName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diseaseIntro: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        version: true
    });

module.exports = Disease;
