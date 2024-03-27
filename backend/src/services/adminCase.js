const Case = require('../models/Case');
const Disease = require('../models/Disease');
const Medicine = require('../models/Medicine');
const Media = require('../models/Media');
//添加病例
exports.addCase = async (caseData) => {
    try {
        // 首先检查是否存在对应的diseaseID
        const disease = await Disease.findByPk(caseData.diseaseID);
        if (!disease) {
            return {
                status: 1,
                message: "无对应diseaseID"
            };
        }

        // 检查medicineIDs是否存在
        for (let id of caseData.medicines) {
            const medicine = await Medicine.findByPk(id);
            if (!medicine) {
                return {
                    status: 2,
                    message: "无对应medicineID"
                };
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

        // 初始化media数组，用于存储Media实例
        const mediaInstances = [];

        // 添加Media记录
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
        for (let id of caseData.medicines) {
            await newCase.addMedicine(id);
        }

        // 返回成功的响应
        return {
            status: 0,
            message: "成功",
            caseID: newCase.caseID
        };
    } catch (error) {

        console.error(error);
        throw error;
    }
}
//修改病例
exports.updateCaseWithMediaAndMedicine = async (caseData) => {
    try {
        // 根据caseID查找病例
        const existingCase = await Case.findByPk(caseData.caseID);
        if (!existingCase) {
            return {
                status: 1,
                message: "无对应caseID"
            };
        }

        // 更新Case表中的记录
        await existingCase.update({
            summary: caseData.summary || existingCase.summary,
            examine: caseData.examine || existingCase.examine,
            diagnose: caseData.diagnose || existingCase.diagnose,
            treatment: caseData.treatment || existingCase.treatment,
            diseaseID: caseData.diseaseID || existingCase.diseaseID

        });

        // 处理Media信息
        // 首先获取所有现有的Media实例
        const existingMedias = await existingCase.getMedia();
        // 创建一个新的Media实例数组
        const newMediaInstances = [];

        // 根据传入的Media数据创建新的Media实例
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

        // 更新Case和Media的关联
        // 移除所有现有的Media关联
        await existingCase.removeMedia(existingMedias);
        // 添加新的Media关联
        await existingCase.addMedia(newMediaInstances);

        // 处理Medicine信息
        // 移除所有现有的Medicine关联
        const existingMedicines = await existingCase.getMedicines();
        await existingCase.removeMedicines(existingMedicines);
        // 添加新的Medicine关联
        for (let medicineId of caseData.medicines) {
            const medicine = await Medicine.findByPk(medicineId);
            if (medicine) {
                await existingCase.addMedicine(medicine);
            } else {
                return {
                    status: 3,
                    message: "无对应medicineID"
                };
            }
        }


        return {
            status: 0,
            message: "成功"
        };
    } catch (error) {

        console.error(error);
        return {
            status: -9,
            message: "失败"
        };
    }
}


//删除病例
exports.deleteCase = async (caseID) => {
    try {
        // 根据caseID查找病例
        const caseToDelete = await Case.findByPk(caseID);
        if (!caseToDelete) {
            return {
                status: 1,
                message: "无对应caseID"
            };
        }


        await caseToDelete.destroy();
        return {
            status: 0,
            message: "成功"
        };
    } catch (error) {
        console.error(error);
        return {
            status: -9,
            message: "失败"
        };
    }
}




