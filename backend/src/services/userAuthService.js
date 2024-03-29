/**
 * 文件: /backend/src/services/userAuthService.js
 * 描述: 用户验证服务，处理注册、登录逻辑
 * 作者: {YYZ}
 */

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { encrypt, decrypt } = require('../utils/cryptoUtil');
const { tokenKey } = require('../config/authConfig')

/**
 * registerUser - 用户登录函数
 * @param {string} userName - 用户名
 * @param {string} password - 密码
 * @returns {Object} 包含注册结果的对象
 */
exports.registerUser = async (userName, password) => {
    try {
        const userExist = await User.findOne({ where: { userName } });
        if (userExist) {
            return { status: 1, message: '重复userName' };
        }
        const encryptedPassword = encrypt(password);
        const newUser = await User.create({ userName, password: encryptedPassword });
        return { status: 0, message: '注册成功', userID: newUser.userID };
    } catch (error) {
        console.error('Error in registerUser:', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * loginUser - 用户登录函数
 * @param {string} userName - 用户名
 * @param {string} password - 密码
 * @returns {Object} 包含登录结果的对象
 */
exports.loginUser = async (userName, password) => {
    try {
        const userExist = await User.findOne({ where: { userName } });
        if (!userExist) {
            return { status: 2, message: '无对应userName' };
        }
        const decryptedPassword = decrypt(user.password);
        if (password !== decryptedPassword) {
            return { status: 1, message: 'userName或password错误' };
        }
        const token = jwt.sign({ userID: userExist.userID, isAdmin: userExist.isAdmin }, tokenKey, { expiresIn: '1h' });
        return { status: 0, message: '登录成功', userID: user.userID, token: token };
    } catch (error) {
        console.error('Error in loginUser:', error);
        return { status: -9, message: '错误' };
    }
}
