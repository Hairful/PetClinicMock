const OSS = require('ali-oss');

const client = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: process.env.OSS_ACCESS_KEY_ID || "LTAI5tS43ke8xF9NqpEsQ9w9",
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET || "yuxJXMGNVIyBF0yyMDV4rHFZPleuL4",
    bucket: 'pcm123'
});

module.exports = client;