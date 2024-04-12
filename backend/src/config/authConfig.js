/**
 * 文件: /backend/src/config/authConfig.js
 * 描述: 定义认证配置
 * 作者: {YYZ}
 */

require('dotenv').config(`.env.${process.env.NODE_ENV}`);

const tokenKey = process.env.TOKEN_KEY || "onlne-generted-security-key";

module.exports = {
    tokenKey
};