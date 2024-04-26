const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Job = sequelize.define('Job', {
    jobID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    job: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jobDetail: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    roomID: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
    {
        version: true
    }
);
module.exports = Job;
