const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const UserProb = require('./UserProb');

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

Prob.belongsToMany(User, { through: UserProb });

module.exports = Prob;
