/**
 * 文件: /backend/src/services/quizAdminService.js
 * 描述: 试题管理服务，处理管理试卷、题目相关逻辑
 * 作者: {SSR; YYZ}
 */

const User = require('../models/User');
const Prob = require('../models/Prob');
const Quiz = require('../models/Quiz');
const UserProb = require('../models/UserProb');
const UserQuiz = require('../models/UserQuiz');

/**
 * createQuizWithProbs - 添加试题
 * @param {Object} quizData - 试题数据
 * @param {string} quizData.quizName - 试题名称
 * @param {integer} quizData.totalCredits - 总分
 * @param {Array} quizData.probs - 问题列表
 * @returns {Object} 对象
 */
exports.createQuizWithProbs = async (quizData) => {
    try {
        const { quizName, totalCredits, probs } = quizData;
        const existingQuiz = await Quiz.findOne({ where: { quizName } });
        if (existingQuiz) {
            return { status: 1, message: "重复的quizName" };
        }
        // 创建新的测验
        const quiz = await Quiz.create({
            quizName: quizName,
            totalCredits: totalCredits
        });
        // 遍历并创建问题
        //记得注释第二行
        for (const prob of probs) {
            await Prob.create({
                quizID: quiz.quizID,
                probCredit: prob.probCredit,
                probText: prob.probText,
                probImg: prob.probImg,
                probAns: prob.probAns
            });
        }
        // 返回成功状态和新创建的 quizID
        return {
            status: 0,
            message: "成功",
            quizID: quiz.quizID
        };
    } catch (error) {
        console.error('Error In createQuizWithProbs :', error);
        return { status: -9, message: '错误' };
    }

}

/**
 * deleteQuiz - 删除试题
 * @param {integer} quizID - 试题ID
 * @returns {Object} 对象
 */
exports.deleteQuiz = async (quizID) => {
    try {
        const existingQuiz = await Quiz.findByPk(quizID);
        if (!existingQuiz) {
            return { status: 1, message: "无对应quizID" };
        }
        await existingQuiz.destroy()
        return { status: 0, message: "成功" };
    } catch (error) {
        console.error('Error In deleteQuiz :', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * updateQuiz - 更新试题
 * @param {Object} quizData - 试题数据
 * @param {integer} quizData.quizID - 试题ID
 * @param {string} quizData.quizName - 试题名称
 * @param {integer} quizData.totalCredits - 总分
 * @param {Array} quizData.probs - 问题列表
 * @returns {Object} 对象
 */
exports.updateQuiz = async (quizData) => {
    try {
        const { quizID, quizName, totalCredits, probs } = quizData;
        const quiz = await Quiz.findByPk(quizID);
        if (!quiz) {
            return { status: 1, message: "无对应quizID" };
        }
        // 更新 quiz
        quiz.quizName = quizName;
        quiz.totalCredits = totalCredits;
        await quiz.save();
        // 删除所有与 quizID 关联的问题
        await Prob.destroy({ where: { quizID } });
        await UserQuiz.destroy({ where: { QuizQuizID: quizID } });
        // 遍历并创建问题
        for (const prob of probs) {
            await Prob.create({
                quizID: quizID,
                probCredit: prob.probCredit,
                probText: prob.probText,
                probImg: prob.probImg,
                probAns: prob.probAns
            });
        }
        return { status: 0, message: "成功" };
    } catch (error) {
        console.error('Error In updateQuiz :', error);
        return { status: -9, message: '错误' };
    }
}


