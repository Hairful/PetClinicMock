/**
 * 文件: /backend/src/controllers/userAuthController.js
 * 描述: 用户验证接口的控制器
 * 作者: {YYZ}
 */

const { registerUser, loginUser } = require('../services/userAuthService');

const loggerConfigurations = [
    { name: 'auth', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.registerUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const result = await registerUser(userName, password);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 400;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ userName: userName, message: 'registerUser: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /userAuthController.js/registerUser:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const result = await loginUser(userName, password);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 401;
                break;
            case 2:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ userName: userName, message: 'loginUser: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /userAuthController.js/loginUser:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

