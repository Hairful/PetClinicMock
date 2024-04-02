/**
 * 文件: cryptoUtil.js
 * 描述: 定义加解密函数
 * 作者: {YYZ}
 */

const crypto = require('crypto');
const { cryptoKey, cryptoIV, cryptoAlgorithm } = require('../config/cryptoConfig');

/**
 * encrypt - AES-128-CBC对称加密
 * @param text {string} 要加密的明文
 * @returns {string} 加密后的密文，16进制字符串
 */
exports.encrypt = (text) => {
    const cipher = crypto.createCipheriv(cryptoAlgorithm, cryptoKey, cryptoIV);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

/**
 * encrypt - AES-128-CBC对称加密
 * @param encryptedText {string} 要解密的密文，16进制字符串
 * @returns {string} 解密后的明文
 */
exports.decrypt = (encryptedText) => {
    const decipher = crypto.createDecipheriv(cryptoAlgorithm, cryptoKey, cryptoIV);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

/**
 * hashPassword - 使用PBKDF2和SHA256哈希算法加盐哈希密码
 * @param password {string} 要哈希的密码
 * @param salt {string} 盐值
 * @returns {string} 哈希后的密码，16进制字符串
 */
exports.hashPassword = (password, salt) => {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha256');
    return hash.toString('hex');
}

/**
 * generateSalt - 生成随机盐值
 * @returns {string} 随机盐值，16进制字符串
 */
exports.generateSalt = () => {
    return crypto.randomBytes(16).toString('hex');
}
