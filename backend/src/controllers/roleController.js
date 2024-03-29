/**
 * 文件: /backend/src/controllers/caseController.js
 * 描述: 角色扮演信息接口的控制器
 * 作者: {YYZ}
 */

const { getJobDetail, getJobList } = require('../services/roleService');

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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getJobList:', error);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getJobDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};