const cluster = require('cluster');
const os = require('os');
const sequelize = require('./config/database');
const app = require('./app');
const { warn, level } = require('winston');
const PORT = process.env.PORT || 3000;

const loggerConfigurations = [
    { name: 'info-server', level: 'info' },
    { name: 'error-server', level: 'warn' }
];
const logger = require('./utils/logUtil')(loggerConfigurations);

if (cluster.isMaster) {
    // 主进程
    const cpuCount = os.cpus().length;
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork(); // 创建一个子进程
    }
} else {
    // 子进程
    sequelize.authenticate()
        .then(async () => {
            logger.info('Successfully connect to the database');
            await sequelize.sync({ alter: true });
            app.listen(PORT, () => {
                logger.info(`The server is running on port: ${PORT}`);
            });
        })
        .catch(err => {
            logger.error('Unable to connect to database', err);
        });
}
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