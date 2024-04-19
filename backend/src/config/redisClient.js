/**
 * 文件: /backend/src/config/redis.js
 * 描述: Redis连接配置
 * 作者: {SSR}
 */

const redis = require('redis');

const loggerConfigurations = [
    { name: 'admin', level: 'info' },
    { name: 'error', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

const redisClient = redis.createClient({
    socket: {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        reconnectStrategy: (retries) => {
            if (retries > 10) {
                logger.error("Too many retries on redis.");
                return new Error("Too many retries.");
            } else {
                logger.warn("Retry on redis.");
                return Math.min(retries * 100, 3000);
            }
        },
    },
});

redisClient.on('error', (err) => {
    logger.error('Redis Client Error', err); // 使用logger.error替换console.log
});

redisClient.connect()
    .then(() => {
        logger.info('Successfully connected to Redis');
    })
    .catch(err => {
        logger.error('Unable to connect to Redis', err);
    });

module.exports = redisClient;
