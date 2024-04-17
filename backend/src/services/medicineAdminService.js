/**
 * 文件: /backend/src/services/medicineService.js
 * 描述: 药品管理服务，处理管理药品相关逻辑
 * 作者: {SSR; YYZ}
 */

const Medicine = require('../models/Medicine');
const redisClient = require('../config/redisClient');
const loggerConfigurations = [
    { name: 'admin', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * createMedicine - 添加药品
 * @param {Object} medicineData - 药品数据
 * @param {string} medicineData.medicineName - 药品名称
 * @param {string} medicineData.medicineIntro - 药品简介
 * @returns {Object} 对象
 */
exports.createMedicine = async (medicineData) => {
    try {
        const existingmedicine = await Medicine.findOne({
            where: { medicineName: medicineData.medicineName }
        });
        if (existingmedicine) {
            return { status: 1, message: "重复的药品名称" };
        }
        // 如果不存在，创建新的Disease实例
        const newMedicine = await Medicine.create(medicineData);
        redisClient.flushAll().then((result) => {
            logger.info('FlushAll result:', result);
        }).catch((error) => {
            logger.error('FlushAll error:', error);
        });
        return {
            status: 0,
            message: "成功",
            medicineID: newMedicine.medicineID
        };
    } catch (error) {
        logger.error('Error in /medicineAdminService.js/createMedicine: ', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * deleteMedicineById - 删除药品
 * @param {integer} medicineId - 药品ID
 * @returns {Object} 对象
 */
exports.deleteMedicineById = async (medicineId) => {
    try {
        // 使用diseaseID查找疾病记录
        const result = await Medicine.destroy({
            where: { medicineID: medicineId }
        });
        if (result > 0) {
            redisClient.flushAll().then((result) => {
                logger.info('FlushAll result:', result);
            }).catch((error) => {
                logger.error('FlushAll error:', error);
            });
            // 如果找到并删除了记录，返回成功的状态和消息
            return { status: 0, message: "成功" };
        } else {
            // 没有找到，返回错误
            return { status: 1, message: "无对应药品ID" };
        }
    } catch (error) {
        logger.error('Error in /medicineAdminService.js/deleteMedicineById: ', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * updateMedicine - 更新药品
 * @param {integer} medicineID - 药品ID
 * @param {Object} updates - 更新数据
 * @returns {Object} 对象
 * 注意: medicineID需要从前端JSON中拆解出来
 */
exports.updateMedicine = async (medicineID, updates) => {
    try {
        const medicineExistByName = await Medicine.findOne({
            where: { medicineName: updates.medicineName }
        });
        if (medicineExistByName && medicineExistByName.medicineID !== medicineID) {
            return { status: 1, message: "重复的药品名称" };
        }
        const medicine = await Medicine.findByPk(medicineID);
        if (!medicine) {
            return { status: 2, message: "无对应药品ID" };
        }
        for (const key in updates) {
            if (medicine[key] !== undefined && updates.hasOwnProperty(key)) {
                medicine[key] = updates[key];
            }
        }
        await medicine.save();
        redisClient.flushAll().then((result) => {
            logger.info('FlushAll result:', result);
        }).catch((error) => {
            logger.error('FlushAll error:', error);
        });
        return { status: 0, message: "成功" };
    } catch (error) {
        logger.error('Error in /medicineAdminService.js/updateMedicine: ', error);
        return { status: -9, message: '错误' };
    }
}
