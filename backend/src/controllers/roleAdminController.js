/**
 * 文件: /backend/src/controllers/roleAdminController.js
 * 描述: 角色扮演管理接口的控制器
 * 作者: {YYZ}
 */

const { createJob, updateJob, deleteJob } = require('../services/roleAdminService');

const loggerConfigurations = [
    { name: 'info-admin', level: 'info' },
    { name: 'error-admin', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.createJob = async (req, res) => {
    try {
        const { role, job, jobDetail, roomID } = req.body;
        const result = await createJob(role, job, jobDetail, roomID);
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
        logger.info({ administratorID: req.userIDInToken, message: 'createJob: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /roleAdminController.js/createJob: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const { role, prevJob, job, jobDetail, roomID } = req.body;
        const result = await updateJob(role, prevJob, job, jobDetail, roomID);
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
                httpStatus = 400;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ administratorID: req.userIDInToken, message: 'updateJob: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /roleAdminController.js/updateJob: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const { role, job } = req.query;
        const result = await deleteJob(role, job);
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
        logger.info({ administratorID: req.userIDInToken, message: 'deleteJob: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /roleAdminController.js/deleteMedicine: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};