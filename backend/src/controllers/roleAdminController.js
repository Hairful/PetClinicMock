/**
 * 文件: /backend/src/controllers/roleAdminController.js
 * 描述: 角色扮演管理接口的控制器
 * 作者: {YYZ}
 */

const { createJob, updateJob, deleteJob } = require('../services/roleAdminService');

exports.createJob = async (req, res) => {
    try {
        const { role, job, jobDetail } = req.body;
        const result = await createJob(role, job, jobDetail);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in createJob:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const { role, job, jobDetail } = req.body;
        const result = await updateJob(role, job, jobDetail);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in updateJob:', error);
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
                httpStatus = 400;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in deleteMedicine:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};