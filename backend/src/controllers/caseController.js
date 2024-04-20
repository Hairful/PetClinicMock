/**
 * 文件: /backend/src/controllers/caseController.js
 * 描述: 病例信息接口的控制器
 * 作者: {YYZ}
 */

const { getCaseList, getCaseDetail, getCaseByString } = require('../services/caseService');

const loggerConfigurations = [
    { name: 'info-case', level: 'info' },
    { name: 'error-case', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.getCaseList = async (req, res) => {
    try {
        const { diseaseID } = req.query;
        const result = await getCaseList(diseaseID);
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
        logger.info({ userID: req.userIDInToken, message: 'getCaseList: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /caseController.js/getCaseList: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.getCaseDetail = async (req, res) => {
    try {
        const { caseID } = req.query;
        const result = await getCaseDetail(caseID);
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
        logger.info({ userID: req.userIDInToken, message: 'getCaseDetail: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /caseController.js/getCaseDetail: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.getCaseByString = async (req, res) => {
    try {
        const { searchString } = req.query;
        const result = await getCaseByString(searchString);
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
        logger.info({ userID: req.userIDInToken, message: 'getCaseByString: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /caseController.js/getCaseByString: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};