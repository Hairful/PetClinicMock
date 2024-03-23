const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Department = sequelize.define('Department', {
    departmentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departmentIntro: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Department;
