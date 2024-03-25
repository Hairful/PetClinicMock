const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Prob = require('./Prob');
const UserQuiz = require('./UserQuiz');

const Quiz = sequelize.define('Quiz', {
    quizID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quizName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalCredits: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Quiz.hasMany(Prob, { foreignKey: 'quizID' });
Quiz.belongsToMany(User, { through: UserQuiz });


module.exports = Quiz;
