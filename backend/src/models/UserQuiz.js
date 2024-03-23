const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const UserQuiz = sequelize.define('UserQuiz', {
    lastTry: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    lastTryTime: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

module.exports = UserQuiz;