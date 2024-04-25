const ProbDb = require('../models/probDb');
const Prob = require('../models/Prob');
const sequelize = require('../config/database');
exports.addProbDb = async (req) => {
    const { probDbCredit, probDbText, probDbImg, probDbAns } = req.body;
    try {
        const newProb = await ProbDb.create({
            probDbCredit,
            probDbText,
            probDbImg,
            probDbAns
        });
        return ({
            status: 0,
            message: "成功",
            probDbID: newProb.probDbID
        });
    } catch (error) {

        return ({
            status: -9,
            message: "失败"
        });
    }
};
exports.updateProbDb = async (req) => {
    const { probDbID, probDbCredit, probDbText, probDbImg, probDbAns } = req.body;
    try {
        const probDb = await ProbDb.findByPk(probDbID);
        const updatedProb = await probDb.update({
            probDbCredit: probDbCredit || probDb.probDbCredit,
            probDbText: probDbText || probDb.probDbText,
            probDbImg: probDbImg || probDb.probDbImg,
            probDbAns: probDbAns || probDb.probDbAns
        });
        return ({
            status: 0,
            message: "成功"

        });
    } catch (error) {
        return ({
            status: -9,
            message: "失败",

        });
    }
};
exports.deleteProbDb = async (req) => {
    const { probDbID } = req.query;
    try {
        const probDb = await ProbDb.findByPk(probDbID);
        await probDb.destroy();
        return ({
            status: 0,
            message: "成功"
        });
    } catch (error) {
        return ({
            status: -9,
            message: "失败",
        });
    }
};
exports.linkProbDbToProb = async (req) => {
    const { probDbID, quizID } = req.body;
    try {
        const probDbData = await ProbDb.findByPk(probDbID);
        const newProb = await Prob.create({
            probCredit: probDbData.probDbCredit,
            probText: probDbData.probDbText,
            probImg: probDbData.probDbImg,
            probAns: probDbData.probDbAns,
            quizID: quizID
        });
        await sequelize.query(`UPDATE quiz SET totalCredits = totalCredits + ${probDbData.probDbCredit} WHERE quizID = ${quizID}`);
        return ({
            status: 0,
            message: "成功"
        });
    } catch (error) {
        return ({
            status: -9,
            message: "失败",
        });
    }
};

