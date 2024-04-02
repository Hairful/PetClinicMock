/**
 * 文件: /backend/src/controllers/vtController.js
 * 描述: 药品信息接口的控制器
 * 作者: {YYZ}
 */

const { getItemDetail, getDepartmentList, getDepartmentDetail } = require('../services/vtService');

exports.getDepartmentList = async (req, res) => {
    try {
        const result = await getDepartmentList();
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getDepartmentList:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.getDepartmentDetail = async (req, res) => {
    try {
        const { departmentID } = req.query;
        const result = await getDepartmentDetail(departmentID);
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
        console.error('Error in getDepartmentDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.getItemDetail = async (req, res) => {
    try {
        const { itemID } = req.query;
        const result = await getItemDetail(itemID);
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
        console.error('Error in getItemDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}