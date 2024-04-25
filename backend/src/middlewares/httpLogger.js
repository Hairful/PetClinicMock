/**
 * 文件: /backend/src/middlewares/httpLogger.js
 * 描述: 记录http的中间件
 * 作者: {YYZ}
 */

/*
总之这里需要对http进行记录，req倒是好说，丢到最前面就行
问题是怎么记录响应，目前http是在Controller层进行响应的
如果记录的话需要再开一个中间件？
{req}->route->log->auth->controller->log->{res}
                            |
                        service

错误的，两个思路
1.重写.send.json方法
2.监听
 */

const loggerConfigurations = [
    { name: 'info-http', level: 'info' },
    { name: 'error-http', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

const httpLogger = (req, res, next) => {
    const start = process.hrtime();
    try {
        res.on('finish', () => {
            const durationInMilliseconds = getDurationInMilliseconds(start);
            logger.info({
                method: req.method,
                path: req.originalUrl,
                statusCode: res.statusCode,
                duration: `${durationInMilliseconds.toLocaleString()} ms`,
                userAgent: req.headers['user-agent'],
                referer: req.headers['referer'],
                ip: req.ip
            });
        });
    } catch (error) {
        logger.error('Error in httpLogger', error);
    }
    next();
};

async function getDurationInMilliseconds(start) {
    const NS_PER_SEC = 1e9;
    const NS_TO_MS = 1e6;
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
}

module.exports = httpLogger;
