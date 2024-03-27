const Medicine = require('../models/Medicine');
//查看药品列表
exports.getAllMedicines=async () => {
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
            // 如果没有找到药品，返回错误状态和消息
            return {
                status: 1,
                message: "无药品数据"
            };
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
//查看药品详情
exports.getMedicineById=async (medicineId) =>{
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
            // 如果没有找到药品，返回404状态码和消息
            return {
                status: 1,
                message: "无对应medicineID"
            };
        }
    } catch (error) {
            console.error('Error:', error);
    }
}

