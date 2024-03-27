const Disease = require('../models/Disease');
//获得疾病列表
exports.getDiseasesByType=async (diseaseType)=> {
    try {
        const diseases = await Disease.findAll({
            where: { diseaseType: diseaseType },
            attributes: ['diseaseID', 'diseaseName']
        });

        if (diseases.length > 0) {
            return {
                status: 1,
                message: "成功",
                diseases: diseases.map(d => ({
                    diseaseID: d.diseaseID,
                    diseaseName: d.diseaseName
                }))
            };
        } else {
            return {
                status: 1,
                message: "无对应diseaseType"
            };
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
//获得疾病类型列表
exports.get_unique_disease_type =async ()=> {
    // 查找所有独特的疾病类型
    const unique_disease_types = await Disease.findAll({
        attributes: ['diseaseType'],
        group: ['diseaseType']
    });

    // 从每个实例中提取diseaseType并创建列表
    const disease_types_list = unique_disease_types.map(disease => disease.diseaseType);

    // 返回JSON对象
    return {
        status: 0,
        message: "成功",
        diseaseTypes: disease_types_list
    };
}
//获得疾病详情
exports.getDiseasesByID=async (diseaseID)=> {
    try {
        const diseases = await Disease.findAll({
            where: { diseaseID: diseaseID },
            attributes: ['diseaseID', 'diseaseType','diseaseName','diseaseIntro']
        });

        if (diseases.length > 0) {
            return {
                status: 1,
                message: "成功",
                diseases: diseases.map(d => ({
                    diseaseID: d.diseaseID,
                    diseaseType: d.diseaseType,
                    diseaseName: d.diseaseName,
                    diseaseIntro: d.diseaseIntro
                }))
            };
        } else {
            return {
                status: 1,
                message: "无对应diseaseID"
            };
        }
    } catch (error) {
        console.error('Error:', error);
    }
}