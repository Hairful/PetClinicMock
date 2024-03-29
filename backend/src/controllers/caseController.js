/**
 * 文件: /backend/src/controllers/caseController.js
 * 描述: 病例信息接口的控制器
 * 作者: {YYZ}
 */

const { getCaseList, getCaseDetail } = require('../services/caseService');

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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getCaseList:', error);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getCaseDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};