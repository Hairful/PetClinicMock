const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Disease = require('./Disease');
const Medicine = require('./Medicine');
const Media = require('./Media');
const CaseMedicine = require('./CaseMedicine');
const Case = sequelize.define('Case', {
    caseID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    examine: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    diagnose: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    treatment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Case.belongsTo(Disease, { foreignKey: 'diseaseID' });
Case.belongsToMany(Medicine, { through: CaseMedicine });
Case.belongsToMany(Media, { through: 'CaseMedia' });

module.exports = Case;
