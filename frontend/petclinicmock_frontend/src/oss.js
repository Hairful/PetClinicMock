const OSS = require('ali-oss');
process.env.OSS_ACCESS_KEY_ID = "LTAI5tS43ke8xF9NqpEsQ9w9";
process.env.OSS_ACCESS_KEY_SECRET = "yuxJXMGNVIyBF0yyMDV4rHFZPleuL4";
// 初始化OSS客户端。请将以下参数替换为您自己的配置信息。
const client = new OSS({
    region: 'oss-cn-shanghai', // 示例：'oss-cn-hangzhou'，填写Bucket所在地域。
    accessKeyId: "LTAI5tS43ke8xF9NqpEsQ9w9", // 确保已设置环境变量OSS_ACCESS_KEY_ID。
    accessKeySecret: "yuxJXMGNVIyBF0yyMDV4rHFZPleuL4", // 确保已设置环境变量OSS_ACCESS_KEY_SECRET。
    bucket: 'pcm123', // 示例：'my-bucket-name'，填写存储空间名称。
});

const upload = async function(dir,file) {
    try {
        // 上传文件到OSS，'object'是OSS中的文件名，'localfile'是本地文件的路径。
        const uploadResult = await client.put(dir + file.name, file);
        
        console.log('上传成功:', uploadResult);
        return getResult;
    } catch (error) {
        console.error('发生错误:', error);
        // 在此处添加错误处理逻辑。
    }
}

export default client