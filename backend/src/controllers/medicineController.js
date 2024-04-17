/**
 * 文件: /backend/src/controllers/medicineController.js
 * 描述: 药品信息接口的控制器
 * 作者: {YYZ}
 */

const { getAllMedicines, getMedicineById } = require('../services/medicineService');

const loggerConfigurations = [
    { name: 'medicine', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.getMedicineList = async (req, res) => {
    try {
        const result = await getAllMedicines();
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
        logger.info({ userID: req.userIDInToken, message: 'getMedicineList: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /medicineControlller.js/getMedicineList:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.getMedicineDetail = async (req, res) => {
    try {
        const { medicineID } = req.query;
        const result = await getMedicineById(medicineID);
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
        logger.info({ userID: req.userIDInToken, message: 'getMedicineDetail: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /medicineControlller.js/getMedicineDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}