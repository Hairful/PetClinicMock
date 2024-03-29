const Disease = require('../models/Disease');
//添加疾病
exports.insertDisease=async (diseaseData) =>{
    try {
        // 首先检查是否已存在相同的diseaseName
        const existingDisease = await Disease.findOne({
            where: { diseaseName: diseaseData.diseaseName }
        });

        // 如果已存在，返回错误消息
        if (existingDisease) {
            return {
                status: 1,
                message: "重复的diseaseName"
            };
        }

        // 如果不存在，创建新的Disease实例
        const newDisease = await Disease.create(diseaseData);
        // 返回成功消息和diseaseID
        return {
            status: 0,
            message: "成功",
            diseaseID: newDisease.diseaseID
        };
    } catch (error) {
        console.error('Error:', error);
    }
}
//删除疾病
exports.deleteDiseaseById=async (diseaseId) =>{
    try {
        // 使用diseaseID查找疾病记录
        const result = await Disease.destroy({
            where: { diseaseID: diseaseId }
        });

        if (result > 0) {
            // 如果找到并删除了记录，返回成功的状态和消息
            return {
                status: 0,
                message: "成功"
            };
        } else {
            // 如果没有找到记录，返回404错误和消息
            return {
                status: 1,
                message: "无对应diseaseID"
            };
        }
    } catch (error) {
        console.error('Error:', error);
        // 如果删除过程中出现错误，可以在这里处理
    }
}
//更新疾病
exports.updateDisease=async (diseaseID, updates) =>{
    try {
        // 查找对应的疾病记录
        const disease = await Disease.findByPk(diseaseID);
        if (!disease) {
            return {
                status: 1,
                message: "无对应diseaseID"
            };
        }

        // 更新疾病记录
        await disease.update(updates);

        
        return {
            status: 0,
            message: "成功"
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            status: -9,
            message: "失败"
        };
    }
}


