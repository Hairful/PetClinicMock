/**
 * 文件: /backend/src/middlewares/formatCheck.js
 * 描述: 参数验证中间件
 * 作者: {YYZ}
 */

const loggerConfigurations = [
    { name: 'auth', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.isQueryValid = (requiredParams) => {
    return (req, res, next) => {
        try {
            const missingParams = [];
            const unexpectedParams = [];
            requiredParams.forEach(param => {
                if (!req.query.hasOwnProperty(param)) {
                    missingParams.push(param);
                }
            });
            Object.keys(req.query).forEach(param => {
                if (!requiredParams.includes(param)) {
                    unexpectedParams.push(param);
                }
            });
            if (missingParams.length === 0 && unexpectedParams.length === 0) {
                logger.info({ userID: req.userIDInToken, message: 'Query parameters are valid.' });
                next();
            } else {
                let errorMessage = '';
                if (missingParams.length > 0) {
                    errorMessage += `缺少必选参数: ${missingParams.join(', ')}.`;
                }
                if (unexpectedParams.length > 0) {
                    errorMessage += `多余参数: ${unexpectedParams.join(', ')}.`;
                }
                logger.info({ userID: req.userIDInToken, message: `Invalid query parameters: ${errorMessage}` });
                res.status(400).json({ status: -3, message: errorMessage });
            }
        } catch (error) {
            logger.error('Error in /formatCheck.js/isQueryValid:', error);
            res.status(500).json({ status: -1, message: '错误' });
        }
    };
};

exports.isBodyValid = (requiredParams) => {
    return (req, res, next) => {
        try {
            const missingParams = [];
            const unexpectedParams = [];
            Object.keys(req.body).forEach(param => {
                if (!requiredParams.includes(param)) {
                    unexpectedParams.push(param);
                }
            });
            requiredParams.forEach(param => {
                if (!req.body.hasOwnProperty(param)) {
                    missingParams.push(param);
                }
            });
            let errorMessage = '';
            if (missingParams.length > 0) {
                errorMessage += `缺少必选参数: ${missingParams.join(', ')}.`;
            }
            if (unexpectedParams.length > 0) {
                errorMessage += `多余参数: ${unexpectedParams.join(', ')}.`;
            }
            if (errorMessage) {
                logger.info({ userID: req.userIDInToken, message: `Invalid body parameters: ${errorMessage}` });
                return res.status(400).json({ status: -3, message: errorMessage });
            }
            logger.info('Body parameters are valid.');
            next();
        } catch (error) {
            logger.error('Error in /formatCheck.js/isBodyValid:', error)
            res.status(500).json({ status: -9, message: '错误' });
        }
    };
};
