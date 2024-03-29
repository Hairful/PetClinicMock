const User = require('../models/User');
const Prob = require('../models/Prob');
const Quiz = require('../models/Quiz');
const UserProb = require('../models/UserProb');
const UserQuiz = require('../models/UserQuiz');
//添加试题
exports.addQuizWithProbs = async (quizData) => {
    try {
        const { quizName, totalCredits, probs } = quizData;

        // 检查是否存在重复的 quizName
        const existingQuiz = await Quiz.findOne({ where: { quizName } });
        if (existingQuiz) {
            return {
                status: 1,
                message: "重复quizName"
            };
        }

        // 创建新的测验
        const quiz = await Quiz.create({
            quizName: quizName,
            totalCredits: totalCredits
        });

        // 遍历并创建问题
        for (const prob of probs) {
            await Prob.create({
                quizID: quiz.quizID,
                probNumber: prob.probID,
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
        console.error('Error In addQuizWithProbs :', error);
        return {
            status: -9,
            message: "失败"
        };
    }

}
//删除试题
exports.eleteQuiz = async (quizID) => {
    try {
        // 查找并删除对应的 quiz
        const quiz = await Quiz.findByPk(quizID);
        if (!quiz) {
            return {
                status: 1,
                message: "无对应quizName"
            };
        }



        // 现在删除 quiz
        await quiz.destroy();

        // 返回成功状态
        return {
            status: 0,
            message: "成功"
        };
    } catch (error) {
        console.error('Error In eleteQuiz :', error);
        // 返回错误信息
        return {
            status: -9,
            message: "失败"
        };
    }
}
//修改试题
exports.updateQuiz = async (quizData) => {
    try {
        const { quizID, quizName, totalCredits, probs } = quizData;

        // 查找对应的 quiz
        const quiz = await Quiz.findByPk(quizID);
        if (!quiz) {
            return {
                status: 1,
                message: "无对应quizID"
            };
        }

        // 更新 quiz
        quiz.quizName = quizName;
        quiz.totalCredits = totalCredits;
        await quiz.save();

        // 删除所有与 quizID 关联的问题
        await Prob.destroy({ where: { quizID } });

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

        // 返回成功状态
        return {
            status: 0,
            message: "成功"
        };
    } catch (error) {
        console.error('Error In updateQuiz :', error);
        // 返回错误信息
        return {
            status: -9,
            message: "失败"
        };
    }
}


