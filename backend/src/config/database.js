/**
 * 文件: /backend/src/config/database.js
 * 描述: 数据库连接配置
 * 作者: {YYZ}
 */

// require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'default'}` });

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME || 'PetClinicMock', process.env.DB_USER || 'PCM', process.env.DB_PASSWORD || 'Pcm123456@', {
    host: process.env.DB_HOST || 'rm-uf6ow60l06e5otd9ego.mysql.rds.aliyuncs.com',
    dialect: process.env.DB_TYPE || 'mysql',
    define: {
        freezeTableName: true
    }
});

module.exports = sequelize;