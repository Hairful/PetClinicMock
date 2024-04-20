/**
 * 文件: /backend/src/controllers/diseaseAdminController.js
 * 描述: 疾病管理接口的控制器
 * 作者: {YYZ}
 */

const { createDisease, updateDisease, deleteDiseaseById } = require('../services/diseaseAdminService');

const loggerConfigurations = [
    { name: 'info-admin', level: 'info' },
    { name: 'error-admin', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.createDisease = async (req, res) => {
    try {
        const result = await createDisease(req.body);
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
        logger.info({ administratorID: req.userIDInToken, message: 'createDisease: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /diseaseAdminController.js/createDisease: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateDisease = async (req, res) => {
    try {
        const { diseaseID } = req.body;
        delete req.body.diseaseID;
        const result = await updateDisease(diseaseID, req.body);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case 2:
                httpStatus = 400;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ administratorID: req.userIDInToken, message: 'updateDisease: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /diseaseAdminController.js/updateDisease: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.deleteDisease = async (req, res) => {
    try {
        const { diseaseID } = req.query;
        const result = await deleteDiseaseById(diseaseID);
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
        logger.info({ administratorID: req.userIDInToken, message: 'deleteDisease: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /diseaseAdminController.js/deleteDisease: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};