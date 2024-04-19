/**
 * 文件: /backend/src/services/medicineService.js
 * 描述: 药品信息服务，处理获取药品信息相关逻辑
 * 作者: {SSR; YYZ}
 */

const Medicine = require('../models/Medicine');

const loggerConfigurations = [
    { name: 'medicine', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * getAllMedicines - 获取所有药品列表
 * @returns {Object} 对象
 */
exports.getAllMedicines = async () => {
    try {
        const medicines = await Medicine.findAll({
            attributes: ['medicineID', 'medicineName']
        });
        if (medicines.length > 0) {
            return {
                status: 0,
                message: "成功",
                medicines: medicines.map(med => ({
                    medicineID: med.medicineID,
                    medicineName: med.medicineName
                }))
            };
        } else {
            return { status: 1, message: "无药品数据" };
        }
    } catch (error) {
        logger.error('Error in /medicineService.js/getAllMedicines: ', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * getMedicineById - 通过药品ID获取药品信息
 * @param {integer} medicineId - 药品ID
 * @returns {Object} 对象
 */
exports.getMedicineById = async (medicineId) => {
    try {
        const medicine = await Medicine.findByPk(medicineId, {
            attributes: ['medicineID', 'medicineName', 'medicineIntro']
        });

        if (medicine) {
            return {
                status: 0,
                message: "成功",
                medicineID: medicine.medicineID,
                medicineName: medicine.medicineName,
                medicineIntro: medicine.medicineIntro
            };
        } else {
            return { status: 1, message: "无对应药品ID" };
        }
    } catch (error) {
        logger.error('Error in /medicineService.js/getMedicineById', error);
        return { status: -9, message: '错误' };
    }
}

