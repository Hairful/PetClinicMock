/**
 * 文件: /backend/src/controllers/medicineAdminController.js
 * 描述: 药品管理接口的控制器
 * 作者: {YYZ}
 */

const { createMedicine, updateMedicine, deleteMedicineById } = require('../services/medicineAdminService');

const loggerConfigurations = [
    { name: 'admin', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.createMedicine = async (req, res) => {
    try {
        const result = await createMedicine(req.body);
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
        logger.info({ administratorID: req.userIDInToken, message: 'createMedicine: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /medicineAdminController.js/createMedicine: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateMedicine = async (req, res) => {
    try {
        const { medicineID } = req.body;
        delete req.body.medicineID;
        const result = await updateMedicine(medicineID, req.body);
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
        logger.info({ administratorID: req.userIDInToken, message: 'updateMedicine: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /medicineAdminController.js/updateMedicine: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.deleteMedicine = async (req, res) => {
    try {
        const { medicineID } = req.query;
        const result = await deleteMedicineById(medicineID);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 400;
                break;
            case 2:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ administratorID: req.userIDInToken, message: 'deleteMedicine: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /medicineAdminController.js/deleteMedicine: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};