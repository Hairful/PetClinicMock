const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Role = sequelize.define('Role', {
    roleID: {
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
    }
});
module.exports = Role;
