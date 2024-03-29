/**
 * 文件: /backend/src/controllers/userAuthController.js
 * 描述: 用户验证接口的控制器
 * 作者: {YYZ}
 */

const { registerUser, loginUser } = require('../services/userAuthService');

exports.registerUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const result = await registerUser(userName, password);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 400;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in registerUser:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const result = await loginUser(userName, password);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 401;
                break;
            case 2:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in loginUser:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

