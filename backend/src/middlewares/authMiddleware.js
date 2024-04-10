/**
 * 文件: /backend/src/middlewares/authMiddleware.js
 * 描述: 用户验证中间件
 * 作者: {YYZ}
 */

const jwt = require('jsonwebtoken');
const { tokenKey } = require('../config/authConfig');
const User = require('../models/User');
const { use } = require('../app');

const loggerConfigurations = [
    { name: 'auth', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.isTokenValid = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        logger.info('No token in header')
        return res.status(400).json({ status: -3, message: '缺少必选参数(Token in Header)' });
    }
    const parts = authHeader.split(' ');
    let token;
    if (parts.length === 2 && parts[0] === 'Bearer') {
        token = parts[1];
    } else if (parts.length === 1) {
        token = parts[0];
    } else {
        logger.info('Invalid token format')
        return res.status(400).json({ status: -3, message: '缺少必选参数/多余参数/格式错误' });
    }
    let decoded;
    try {
        decoded = jwt.verify(token, tokenKey);
    } catch (errorInJWT) {
        logger.error('Error in /authMiddleware/isTokenValid', errorInJWT);
        return res.status(401).json({ status: -1, message: '身份验证失败' });
    }
    // 检查用户是否存在
    const user = await User.findByPk(decoded.userID);
    if (!user) {
        logger.info(`UserID ${decoded.userID} not found in database`);
        return res.status(401).json({ status: 401, message: '身份验证失败' });
    }
    logger.info({ token: req.headers.authorization, message: 'Token is valid' })
    // 将用户信息添加到请求中，以便后续路由处理程序使用
    req.userIDInToken = decoded.userID;
    req.isAdminIDInToken = decoded.isAdmin;
    next();
};

exports.isTokenAdmin = async (req, res, next) => {
    try {
        if (!req.isAdminIDInToken) {
            logger.info({ userID: req.userIDInToken, message: 'No admin permission' })
            return res.status(403).json({ status: -2, message: '无对应权限' });
        }
        const user = await User.findByPk(req.userIDInToken);
        if (!user.isAdmin) {
            logger.info({ userID: req.userIDInToken, message: 'No admin permission' })
            return res.status(403).json({ status: -2, message: '无对应权限' });
        }
        logger.info({ token: req.headers.authorization, message: "Token is admin" })
        next();
    } catch (error) {
        logger.error('Error in /authMiddleware/isTokenAdmin:', error);
        return res.status(500).json({ status: 500, message: '错误' });
    }
};