const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Medicine = sequelize.define('Medicine', {
    medicineID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicineName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medicineIntro: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Medicine;