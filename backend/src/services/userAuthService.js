const User = require('../models/User');
const { encrypt, decrypt } = require('../utils/cryptoUtil');

exports.registerUser = async (userName, password) => {
    try {
        const encryptedPassword = encrypt(password);
        const newUser = await User.create({ userName, password: encryptedPassword });
        return { status: 0, message: '注册成功', userID: newUser.userID };
    } catch (error) {
        console.error('Error in registerUser:', error);
        return { status: -1, message: '注册失败' };
    }
}

exports.loginUser = async (userName, password) => {
    try {
        const user = await User.findOne({ where: { userName } });
        if (!user) {
            return { status: 2, message: '无对应userName' };
        }

        const decryptedPassword = decrypt(user.password.iv, user.password.encryptedData);
        if (password !== decryptedPassword) {
            return { status: 1, message: 'userName或password错误' };
        }

        return { status: 0, message: '登录成功', userID: user.userID };
    } catch (error) {
        console.error('Error in loginUser:', error);
        return { status: -1, message: '登录失败' };
    }
}
