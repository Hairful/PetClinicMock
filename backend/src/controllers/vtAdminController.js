/**
 * 文件: /backend/src/controllers/vtAdminController.js
 * 描述: 疾病管理接口的控制器
 * 作者: {YYZ}
 */

const { updateItemInfo, updateDepartmentInfo } = require('../services/vtAdminService');

exports.updateItem = async (req, res) => {
    try {
        const { itemID, itemName, itemIntro } = req.body;
        const result = await updateItemInfo(itemID, itemName, itemIntro);
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
        console.error('Error in updateItemInfo:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const { departmentID, departmentName, departmentIntro } = req.body;
        const result = await updateDepartmentInfo(departmentID, departmentName, departmentIntro);
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
        console.error('Error in updateDepartmentInfo:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};