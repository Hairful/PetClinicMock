/**
 * 文件: /backend/src/controllers/vtController.js
 * 描述: 3D虚拟导览接口的控制器
 * 作者: {YYZ}
 */

const { getItemDetail } = require('../services/vtService');

const loggerConfigurations = [
    { name: 'vt', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/* TODO: We may delete them later, I'm not sure.
exports.getDepartmentList = async (req, res) => {
    try {
        const result = await getDepartmentList();
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /vtController.js/getDepartmentList:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.getDepartmentDetail = async (req, res) => {
    try {
        const { departmentID } = req.query;
        const result = await getDepartmentDetail(departmentID);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ userID: req.userIDInToken, message: 'getDepartmentDetail: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /vtController.js/getDepartmentDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}
 */


exports.getItemDetail = async (req, res) => {
    try {
        const { itemID } = req.query;
        const result = await getItemDetail(itemID);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ userID: req.userIDInToken, message: 'getItemDetail: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /vtController.js/getItemDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}