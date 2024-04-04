/**
 * 文件: /backend/src/middlewares/formatCheck.js
 * 描述: 参数验证中间件
 * 作者: {YYZ}
 */

exports.isQueryValid = (requiredParams) => {
    return (req, res, next) => {
        try {
            const missingParams = [];
            const unexpectedParams = [];
            requiredParams.forEach(param => {
                if (!req.query.hasOwnProperty(param)) {
                    missingParams.push(param);
                }
            });
            Object.keys(req.query).forEach(param => {
                if (!requiredParams.includes(param)) {
                    unexpectedParams.push(param);
                }
            });
            if (missingParams.length === 0 && unexpectedParams.length === 0) {
                next();
            } else {
                let errorMessage = '';
                if (missingParams.length > 0) {
                    errorMessage += `缺少必选参数: ${missingParams.join(', ')}.`;
                }
                if (unexpectedParams.length > 0) {
                    errorMessage += `多余参数: ${unexpectedParams.join(', ')}.`;
                }
                res.status(400).json({ status: -3, message: errorMessage });
            }
        } catch (error) {
            console.error('Error in isQueryValid:', error);
            res.status(500).json({ status: -1, message: '错误' });
        }
    };
};

exports.isBodyValid = (requiredParams) => {
    return (req, res, next) => {
        try {
            const missingParams = [];
            const unexpectedParams = [];
            Object.keys(req.body).forEach(param => {
                if (!requiredParams.includes(param)) {
                    unexpectedParams.push(param);
                }
            });
            requiredParams.forEach(param => {
                if (!req.body.hasOwnProperty(param)) {
                    missingParams.push(param);
                }
            });
            let errorMessage = '';
            if (missingParams.length > 0) {
                errorMessage += `缺少必选参数: ${missingParams.join(', ')}. `;
            }
            if (unexpectedParams.length > 0) {
                errorMessage += `多余参数: ${unexpectedParams.join(', ')}.`;
            }
            if (errorMessage) {
                return res.status(400).json({ status: -3, message: errorMessage });
            }
            next();
        } catch (error) {
            console.error('Error in isBodyValid:', error);
            res.status(500).json({ status: -9, message: '错误' });
        }
    };
};
