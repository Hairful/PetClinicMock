/**
 * 文件: /backend/src/controllers/diseaseAdminController.js
 * 描述: 病例管理接口的控制器
 * 作者: {YYZ}
 */

const { createCase, updateCase, deleteCase } = require('../services/caseAdminService');

const loggerConfigurations = [
    { name: 'admin', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.createCase = async (req, res) => {
    try {
        const result = await createCase(req.body);
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
        logger.info({ administratorID: req.userIDInToken, message: 'createCase: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /caseAdminController/createCase:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateCase = async (req, res) => {
    try {
        const result = await updateCase(req.body);
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
            case 3:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ administratorID: req.userIDInToken, message: 'updateCase: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /caseAdminController/updateCase:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.deleteCase = async (req, res) => {
    try {
        const { caseID } = req.query;
        const result = await deleteCase(caseID);
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
        logger.info({ administratorID: req.userIDInToken, message: 'deleteCase: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /caseAdminController/deleteCase:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};