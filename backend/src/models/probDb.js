const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ProbDb = sequelize.define('ProbDb', {
    probDbID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    probDbCredit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    probDbText: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    probDbImg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    probDbAns: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
module.exports = ProbDb;
