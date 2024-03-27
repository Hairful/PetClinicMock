const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Quiz = require('./Quiz');
const Prob = require('./Prob');
const UserProb = require('./UserProb')
const UserQuiz = require('./UserQuiz')

const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

User.belongsToMany(Quiz, { through: UserQuiz });
User.belongsToMany(Prob, { through: UserProb });

module.exports = User;
