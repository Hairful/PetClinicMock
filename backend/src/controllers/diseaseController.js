/**
 * 文件: /backend/src/controllers/diseaseController.js
 * 描述: 疾病信息接口的控制器
 * 作者: {YYZ}
 */

const { getDiseaseList, getDiseaseTypes, getDiseasesByID } = require('../services/diseaseService');

exports.getDiseaseTypes = async (req, res) => {
    try {
        const result = await getDiseaseTypes();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in getDiseaseTypes:', error);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getDiseaseList: ', error);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getDiseaseDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};