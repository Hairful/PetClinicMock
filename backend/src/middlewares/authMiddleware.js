/**
 * 文件: /backend/src/middlewares/authMiddleware.js
 * 描述: 用户验证中间件
 * 作者: {YYZ}
 */

const jwt = require('jsonwebtoken');
const { tokenKey } = require('../config/authConfig');
const User = require('../models/User');

exports.isTokenValid = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).json({ status: -3, message: '缺少必选参数(Token in Header)' });
    }
    const parts = authHeader.split(' ');
    let token;
    if (parts.length === 2 && parts[0] === 'Bearer') {
        token = parts[1];
    } else if (parts.length === 1) {
        token = parts[0];
    } else {
        return res.status(400).json({ status: -3, message: '缺少必选参数/多余参数/格式错误' });
    }
    let decoded;
    try {
        decoded = jwt.verify(token, tokenKey);
    } catch (errorInJWT) {
        console.error('Error in authMiddleware:', errorInJWT);
        return res.status(401).json({ status: -1, message: '身份验证失败' });
    }
    // 检查用户是否存在
    const user = await User.findByPk(decoded.userID);
    if (!user) {
        console.error('Error in authMiddleware: Token can not correspond to a user');
        return res.status(401).json({ status: 401, message: '身份验证失败' });
    }
    // 将用户信息添加到请求中，以便后续路由处理程序使用
    req.userIDInToken = decoded.userID;
    req.isAdminIDInToken = decoded.isAdmin;
    next();
};

exports.isTokenAdmin = async (req, res, next) => {
    try {
        if (!req.isAdminIDInToken) {
            return res.status(403).json({ status: -2, message: '无对应权限' });
        }
        const userIDInToken = req.userIDInToken;
        const user = await User.findByPk(userIDInToken);
        if (!user || !user.isAdmin) {
            return res.status(403).json({ status: -2, message: '无对应权限' });
        }
        next();
    } catch (error) {
        console.error('Error in isTokenAdmin:', error);
        return res.status(500).json({ status: 500, message: '服务器错误' });
    }
};