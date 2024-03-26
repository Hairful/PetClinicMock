const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prob = sequelize.define('Prob', {
    probID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    probCredit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    probText: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    probImg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    probAns: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Prob;
