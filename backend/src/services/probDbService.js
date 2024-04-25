const ProbDb = require('../models/probDb');
exports.getProbDbList = async () => {
    try {
        const probDbs = await ProbDb.findAll({
            attributes: ['probDbID', 'probDbText']
        });
        return ({
            status: 0,
            message: "成功",
            probDbs: probDbs
        });
    } catch (error) {
        return ({
            status: -9,
            message: "查询失败",
            error: error
        });
    }
};
exports.getProbDbDetail = async (probDbID) => {
    try {
        const probDb = await ProbDb.findByPk(probDbID, {
            attributes: ['probDbID', 'probDbCredit', 'probDbText', 'probDbImg', 'probDbAns']
        });
        if (probDb) {
            return {
                status: 0,
                message: "成功",
                ...probDb.get({ plain: true })
            };
        }
    } catch (error) {
        return {
            status: -9,
            message: "失败",
            error: error
        };
    }
};
