/**
 * 文件: userAuthService.js
 * 描述: 登录与注册服务
 * 作者: {YYZ}
 */

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Token = require('../models/Token');
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
        const existingUser = await User.findOne({ where: { userName } });
        if (existingUser) {
            return { status: 1, message: '重复userName' };
        }
        const encryptedPassword = encrypt(password);
        const newUser = await User.create({ userName, password: encryptedPassword });
        return { status: 0, message: '注册成功', userID: newUser.userID };
    } catch (error) {
        console.error('Error in registerUser:', error);
        return { status: -9, message: "失败" };
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
        const user = await User.findOne({ where: { userName } });
        if (!user) {
            return { status: 2, message: '无对应userName' };
        }
        const decryptedPassword = decrypt(user.password);
        if (password !== decryptedPassword) {
            return { status: 1, message: 'userName或password错误' };
        }
        const token = jwt.sign({ userID: user.userID }, tokenKey, { expiresIn: '1h' });
        let existingToken = await Token.findOne({ where: { userID: user.userID } });
        if (existingToken) {
            existingToken.token = token;
            existingToken.expiresAt = new Date(Date.now() + 3600000);
            await existingToken.save();
        } else {
            await Token.create({ token, expiresAt: new Date(Date.now() + 3600000), userID: user.userID });
        }
        return { status: 0, message: '登录成功', userID: user.userID, token: token };
    } catch (error) {
        console.error('Error in loginUser:', error);
        return { status: -9, message: '失败' };
    }
}
