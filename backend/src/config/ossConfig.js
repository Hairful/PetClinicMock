const OSS = require('ali-oss');

const client = new OSS({
    region: process.env.OSS_REGION || 'oss-cn-shanghai',
    accessKeyId: process.env.OSS_ACCESS_KEY_ID || "LTAI5tS43ke8xF9NqpEsQ9w9",
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET || "yuxJXMGNVIyBF0yyMDV4rHFZPleuL4",
    bucket: process.env.OSS_BUCKET || 'pcm123'
});

module.exports = client;