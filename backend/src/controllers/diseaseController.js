/**
 * 文件: /backend/src/controllers/diseaseController.js
 * 描述: 疾病信息接口的控制器
 * 作者: {YYZ}
 */

const { getDiseaseList, getDiseaseTypes, getDiseasesByID } = require('../services/diseaseService');

const loggerConfigurations = [
    { name: 'disease', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.getDiseaseTypes = async (req, res) => {
    try {
        const result = await getDiseaseTypes();
        logger.info({ userID: req.userIDInToken, message: 'getDiseaseTypes: ' + result.message });
        res.status(200).json(result);
    } catch (error) {
        logger.error('Error in /diseaseController.js/getDiseaseTypes: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.getDiseaseList = async (req, res) => {
    try {
        const { diseaseType } = req.query;
        const result = await getDiseaseList(diseaseType);
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
        logger.info({ userID: req.userIDInToken, message: 'getDiseaseList: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /diseaseController.js/getDiseaseList: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.getDiseaseDetail = async (req, res) => {
    try {
        const { diseaseID } = req.query;
        const result = await getDiseasesByID(diseaseID);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
        }
        logger.info({ userID: req.userIDInToken, message: 'getDiseaseDetail: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        consloggerole.error('Error in /diseaseController.js/getDiseaseDetail: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};