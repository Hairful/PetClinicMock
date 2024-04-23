/**
 * 文件: /backend/src/services/caseAdminService.js
 * 描述: 病例管理服务，处理管理病例相关逻辑
 * 作者: {SSR; YYZ}
 */

const Case = require('../models/Case');
const Disease = require('../models/Disease');
const Medicine = require('../models/Medicine');
const Media = require('../models/Media');
const { redisClient } = require('../config/redisClient');
const loggerConfigurations = [
    { name: 'info-admin', level: 'info' },
    { name: 'error-admin', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * createCase - 添加病例
 * @param {Object} caseData - 病例数据
 * @returns {Object} 对象
 */
exports.createCase = async (caseData) => {
    try {
        const disease = await Disease.findByPk(caseData.diseaseID);
        if (!disease) {
            return { status: 1, message: "无对应diseaseID" };
        }
        // 检查medicineIDs是否存在
        for (let medicineData of caseData.medicines) {
            const medicine = await Medicine.findByPk(medicineData.medicineID);
            if (!medicine) {
                return { status: 2, message: "无对应medicineID" };
            }
        }
        // 创建新的Case实例
        const newCase = await Case.create({
            summary: caseData.examine,
            examine: caseData.examine,
            diagnose: caseData.diagnose,
            treatment: caseData.treatment,
            diseaseID: caseData.diseaseID
        });
        // 添加Media记录
        const mediaInstances = [];
        const mediaTypes = ['summaryPictures', 'summaryVideos', 'examinePictures', 'examineVideos', 'diagnosePictures', 'diagnoseVideos', 'treatmentPictures', 'treatmentVideos'];
        for (let type of mediaTypes) {
            if (caseData[type]) {
                for (let url of caseData[type]) {
                    const media = await Media.create({
                        mediaType: type,
                        mediaURL: url
                    });
                    mediaInstances.push(media);
                }
            }
        }
        // 关联Case和Media
        if (mediaInstances.length > 0) {
            await newCase.addMedia(mediaInstances);
        }
        // 关联Medicine记录
        for (let medicineData of caseData.medicines) {
            await newCase.addMedicine(medicineData.medicineID, { through: { dosage: medicineData.dosage } });
        }
        return {
            status: 0,
            message: "成功",
            caseID: newCase.caseID
        };
    } catch (error) {
        logger.error('Error in /caseAdminService.js/createCase: ', error);
        throw error;
    }
}

/**
 * updateCase - 更新病例
 * @param {Object} caseData - 病例数据
 * @returns {Object} 对象
 */
exports.updateCase = async (caseData) => {
    try {
        const existingCase = await Case.findByPk(caseData.caseID);
        if (!existingCase) {
            return { status: 1, message: "无对应caseID" };
        }
        let updateObject = {};
        if (caseData.summary) updateObject.summary = caseData.summary;
        if (caseData.examine) updateObject.examine = caseData.examine;
        if (caseData.diagnose) updateObject.diagnose = caseData.diagnose;
        if (caseData.treatment) updateObject.treatment = caseData.treatment;
        if (caseData.diseaseID) updateObject.diseaseID = caseData.diseaseID;
        await existingCase.update(updateObject);
        if (caseData.summaryPictures || caseData.summaryVideos || caseData.examinePictures || caseData.examineVideos || caseData.diagnosePictures || caseData.diagnoseVideos || caseData.treatmentPictures || caseData.treatmentVideos) {
            const existingMedias = await existingCase.getMedia();
            await existingCase.removeMedia(existingMedias);
            const newMediaInstances = [];
            const mediaTypes = ['summaryPictures', 'summaryVideos', 'examinePictures', 'examineVideos', 'diagnosePictures', 'diagnoseVideos', 'treatmentPictures', 'treatmentVideos'];
            for (let type of mediaTypes) {
                if (caseData[type]) {
                    for (let url of caseData[type]) {
                        const media = await Media.create({
                            mediaType: type,
                            mediaURL: url
                        });
                        newMediaInstances.push(media);
                    }
                }
            }
            await existingCase.addMedia(newMediaInstances);
        }
        if (caseData.medicines) {
            const existingMedicines = await existingCase.getMedicines();
            await existingCase.removeMedicines(existingMedicines);
            for (let medicineData of caseData.medicines) {
                const medicine = await Medicine.findByPk(medicineData.medicineID);
                if (medicine) {
                    await existingCase.addMedicine(medicine, { through: { dosage: medicineData.dosage } });
                } else {
                    return {
                        status: 3,
                        message: "无对应medicineID"
                    };
                }
            }
        }
        await redisClient.del(`caseInfo:${caseData.caseID}`);
        await redisClient.del(`caseMedicines:${caseData.caseID}`);

        return { status: 0, message: "成功" };
    } catch (error) {
        logger.error('Error in /caseAdminService.js/updateCase', error);
        return { status: -9, message: "失败" };
    }
};
/**
 * deleteCase - 删除病例
 * @param {integer} caseID - 病例ID
 * @returns {Object} 对象
 */
exports.deleteCase = async (caseID) => {
    try {
        const caseToDelete = await Case.findByPk(caseID);
        if (!caseToDelete) {
            return { status: 1, message: "无对应caseID" };
        }
        await caseToDelete.destroy();
        await redisClient.del(`caseInfo:${caseID}`);
        await redisClient.del(`caseMedicines:${caseID}`);
        return { status: 0, message: "成功" };
    } catch (error) {
        logger.error('Error in /caseAdminService.js/deleteCase', error);
        return { status: -9, message: "失败" };
    }
}




