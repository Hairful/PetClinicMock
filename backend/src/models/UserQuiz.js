const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const UserQuiz = sequelize.define('UserQuiz', {
    lastTry: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    lastTryTime: {
        type: DataTypes.DATE,
        allowNull: true
    }
},
    {
        version: true
    });

module.exports = UserQuiz;