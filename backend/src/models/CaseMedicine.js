const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const CaseMedicine = sequelize.define('CaseMedicine', {
    dosage: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = CaseMedicine;