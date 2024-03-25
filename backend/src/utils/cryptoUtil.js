const crypto = require('crypto');
//const { cryptoKey } = require('../config/cryptoConfig');

const algorithm = 'aes-128-gcm';

function encrypt(text) {
    const iv = crypto.randomBytes(16); // 生成随机的初始化向量
    let cryptoKey = crypto.createHash('sha256').digest('base64').slice(0, 16)
    const cipher = crypto.createCipheriv(algorithm, cryptoKey, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}

function decrypt(iv, encryptedData) {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(cryptoKey), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = { encrypt, decrypt };
