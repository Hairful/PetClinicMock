/**
 * 文件: /backend/src/config/cryptoConfig.js
 * 描述: 加解密配置
 * 作者: {YYZ}
 */

const cryptoKey = '9cd5b4cf89949207'
const cryptoIV = 'e6db271db12d4d47'
const cryptoAlgorithm = "aes-128-cbc";

module.exports = {
    cryptoKey,
    cryptoIV,
    cryptoAlgorithm
};