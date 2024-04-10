const sequelize = require('./config/database');
const app = require('./app');
const PORT = process.env.PORT || 3000;

const loggerConfigurations = [
    { name: 'server', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('./utils/logUtil')(loggerConfigurations);

sequelize.authenticate()
    .then(async () => {
        logger.info('成功连接到数据库');
        //await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            logger.info(`服务器运行在端口: ${PORT}`);
        });
    })
    .catch(err => {
        logger.error('无法连接到数据库', err);
    });