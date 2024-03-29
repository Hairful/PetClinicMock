/**
 * 文件: /backend/src/services/diseaseService.js
 * 描述: 疾病信息服务，处理获取疾病信息相关逻辑
 * 作者: {SSR; YYZ}
 */

const Disease = require('../models/Disease');

/**
 * getAllDiseases - 获取所有疾病列表
 * @param {string} diseaseType - 疾病类型
 * @returns {Object} 对象
 * TODO: diseaseType为可选参数，若未填则返回所有疾病
 */
exports.getDiseasesByType = async (diseaseType) => {
    try {
        const diseases = await Disease.findAll({
            where: { diseaseType: diseaseType },
            attributes: ['diseaseID', 'diseaseName']
        });
        if (diseases.length > 0) {
            return {
                status: 0,
                message: "成功",
                diseases: diseases.map(d => ({
                    diseaseID: d.diseaseID,
                    diseaseName: d.diseaseName
                }))
            };
        } else {
            return { status: 1, message: "无对应diseaseType" };
        }
    } catch (error) {
        console.error('Error in getDiseasesByType', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * getUniqueDiseaseType - 获取所有疾病类型
 * @returns {Object} 对象
 */
exports.getUniqueDiseaseType = async () => {
    try {
        const unique_disease_types = await Disease.findAll({
            attributes: ['diseaseType'],
            group: ['diseaseType']
        });
        // 从每个实例中提取diseaseType并创建列表
        const disease_types_list = unique_disease_types.map(disease => disease.diseaseType);
        return {
            status: 0,
            message: "成功",
            diseaseTypes: disease_types_list
        };
    } catch (error) {
        console.error('Error in getUniqueDiseaseType', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * getDiseasesByID - 通过疾病ID获取疾病信息
 * @param {integer} diseaseID - 疾病ID
 * @returns {Object} 对象
 */
exports.getDiseasesByID = async (diseaseID) => {
    try {
        const diseases = await Disease.findOne({
            where: { diseaseID: diseaseID },
            attributes: ['diseaseID', 'diseaseType', 'diseaseName', 'diseaseIntro']
        });
        if (diseases) {
            return {
                status: 0,
                message: "成功",
                diseaseDetail: {
                    diseaseID: diseases.diseaseID,
                    diseaseType: diseases.diseaseType,
                    diseaseName: diseases.diseaseName,
                    diseaseIntro: diseases.diseaseIntro
                }
            };
        } else {
            return { status: 1, message: "无对应diseaseID" };
        }
    } catch (error) {
        console.error('Error in getDiseasesByID', error);
        return { status: -9, message: '错误' };
    }
}