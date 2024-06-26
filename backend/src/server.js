/**
 * 文件: /src/server.js
 * 描述: 服务器入口文件
 * 作者: {YYZ}
 */
const sequelize = require('./config/database');
const app = require('./app');
const PORT = process.env.PORT || 3000;

const loggerConfigurations = [
    { name: 'info-server', level: 'info' },
    { name: 'error-server', level: 'warn' }
];
const logger = require('./utils/logUtil')(loggerConfigurations);

sequelize.authenticate()
    .then(async () => {
        logger.info('Successfully connect to the database');
        //await sequelize.sync({ alter: true });
        //启用这条，会尝试建立数据库模型
        app.listen(PORT, () => {
            logger.info(`The server is running on port: ${PORT}`);
        });
    })
    .catch(err => {
        logger.error('Unable to connect to database', err);
    });