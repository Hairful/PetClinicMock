const Medicine = require('../models/Medicine');
//添加药品
exports.insertMedicine = async (medicineData) => {
    try {
        // 首先检查是否已存在相同的diseaseName
        const existingmedicine = await Medicine.findOne({
            where: { medicineName: medicineData.medicineName }
        });

        // 如果已存在，返回错误消息
        if (existingmedicine) {
            return {
                status: 1,
                message: "重复的medicineName"
            };
        }

        // 如果不存在，创建新的Disease实例
        const newMedicine = await Medicine.create(medicineData);
        // 返回成功消息和diseaseID
        return {
            status: 0,
            message: "成功",
            medicineID: newMedicine.medicineID
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            status: -9,
            message: "失败"
        };
    }
}
//删除药品
exports.deleteMedicineById = async (medicineId) => {
    try {
        // 使用diseaseID查找疾病记录
        const result = await Medicine.destroy({
            where: { medicineID: medicineId }
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
                message: "无对应medicineID"
            };
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            status: -9,
            message: "失败"
        };
    }
}
//更新药品
exports.updateMedicine = async (medicineID, updates) => {
    try {
        // 查找对应的药品记录
        const medicine = await Medicine.findByPk(medicineID);
        if (!medicine) {
            return {
                status: 1,
                message: "无对应medicineID"
            };
        }

        // 更新药品记录
        await medicine.update(updates);

        // 返回成功消息
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
