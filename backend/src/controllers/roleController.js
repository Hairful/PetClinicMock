/**
 * 文件: /backend/src/controllers/caseController.js
 * 描述: 角色扮演信息接口的控制器
 * 作者: {YYZ}
 */

const { getJobDetail, getJobList } = require('../services/roleService');

const loggerConfigurations = [
    { name: 'info-role', level: 'info' },
    { name: 'error-role', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.getJobList = async (req, res) => {
    try {
        const { role } = req.query;
        result = await getJobList(role);
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
        logger.info({ userID: req.userIDInToken, message: 'getJobList: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /roleController.js/getJobList:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.getJobDetail = async (req, res) => {
    try {
        const { role, job } = req.query;
        const result = await getJobDetail(role, job);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case 2:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ userID: req.userIDInToken, message: 'getJobDetail: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /roleController.js/getJobDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};