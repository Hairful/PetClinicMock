/**
 * 文件: /backend/src/services/diseaseAdminService.js
 * 描述: 疾病管理服务，处理管理疾病相关逻辑
 * 作者: {SSR; YYZ}
 */

const Disease = require('../models/Disease');

/**
 * createDisease - 添加疾病
 * @param {Object} diseaseData - 疾病数据
 * @returns {Object} 对象
 */
exports.createDisease = async (diseaseData) => {
    try {
        const existingDisease = await Disease.findOne({
            where: { diseaseName: diseaseData.diseaseName }
        });
        if (existingDisease) {
            return { status: 1, message: "重复的diseaseName" };
        }
        // 如果不存在，创建新的Disease实例
        const newDisease = await Disease.create(diseaseData);
        return {
            status: 0,
            message: "成功",
            diseaseID: newDisease.diseaseID
        };
    } catch (error) {
        console.error('Error in createDisease', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * deleteDiseaseById - 删除疾病
 * @param {integer} diseaseId - 疾病ID
 * @returns {Object} 对象
 */
exports.deleteDiseaseById = async (diseaseId) => {
    try {
        // 使用diseaseID查找疾病记录
        const result = await Disease.destroy({
            where: { diseaseID: diseaseId }
        });
        if (result > 0) {
            return { status: 0, message: "成功" };
        } else {
            return { status: 1, message: "无对应diseaseID" };
        }
    } catch (error) {
        console.error('Error in deleteDiseaseById', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * updateDisease - 更新疾病
 * @param {integer} diseaseID - 疾病ID
 * @param {Object} updates - 更新数据
 * @returns {Object} 对象
 * 注意: diseaseID需要从前端JSON中拆解出来
 */
exports.updateDisease = async (diseaseID, updates) => {
    try {
        const disease = await Disease.findByPk(diseaseID);
        if (!disease) {
            return { status: 1, message: "无对应diseaseID" };
        }
        for (const key in updates) {
            if (disease[key] !== undefined && updates.hasOwnProperty(key)) {
                disease[key] = updates[key];
            }
        }
        await disease.save();
        return { status: 0, message: "成功" };
    } catch (error) {
        console.error('Error in updateDisease', error);
        return { status: -9, message: '错误' };
    }
};


