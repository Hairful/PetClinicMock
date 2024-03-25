const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Token = sequelize.define('Token', {
    tokenID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

Token.belongsTo(User, { foreignKey: 'userID' });

module.exports = Token;
