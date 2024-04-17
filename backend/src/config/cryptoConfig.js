/**
 * 文件: /backend/src/config/cryptoConfig.js
 * 描述: 加解密配置
 * 作者: {YYZ}
 */

// require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'default'}` });

const cryptoKey = process.env.CRYPTO_MENT || '9cd5b4cf89949207'
const cryptoIV = process.env.CRYPTO_IV || 'e6db271db12d4d47'

module.exports = {
    cryptoKey,
    cryptoIV
};