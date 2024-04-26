const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Department = require('./Department');

const Item = sequelize.define('Item', {
    itemID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    itemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    itemIntro: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    itemURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        version: true
    }
);

Item.belongsTo(Department, { foreignKey: 'departmentID' });

module.exports = Item;
