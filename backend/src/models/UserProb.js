const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const UserProb = sequelize.define('UserProb', {
    lastAns: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = UserProb;