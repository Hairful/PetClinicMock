const winston = require('winston');
require('winston-daily-rotate-file');

function createLogger(configurations) {
    const transports = [];

    configurations.forEach(config => {
        if (config.name && config.level) {
            const transport = new winston.transports.DailyRotateFile({
                filename: `./logs/${config.name}-%DATE%.log`,
                level: config.level,
                datePattern: 'YYYY-MM-DD',
                maxSize: '1m',
                maxFiles: '3',
                zippedArchive: true
            });
            transports.push(transport);
        }
    });
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format(info => ({ ...info, level: info.level.toUpperCase() }))(),
            winston.format.timestamp(),
            winston.format.errors({ stack: true }),
            winston.format.json()
        ),
        transports: [
            ...transports,
            new winston.transports.Console({
                level: 'warn',
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.printf(({ timestamp, level, message, ...info }) => {
                        let additionalInfo = '';
                        Object.keys(info).forEach(key => {
                            additionalInfo += `{[${key}]: ${info[key]}} `;
                        });
                        return `[${timestamp}][${level}]${additionalInfo}${message}`;
                    })
                )
            })
        ]
    });
    return logger;
}

module.exports = createLogger;