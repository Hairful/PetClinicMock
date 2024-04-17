/**
 * 文件: /backend/src/services/quizService.js
 * 描述: 试题信息服务，处理获取试卷、题目相关逻辑
 * 作者: {SSR; YYZ}
 */

const User = require('../models/User');
const Prob = require('../models/Prob');
const Quiz = require('../models/Quiz');
const UserProb = require('../models/UserProb');
const UserQuiz = require('../models/UserQuiz');

const loggerConfigurations = [
    { name: 'quiz', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * getQuizList - 获取试卷列表
 * @param {integer} userID - 用户ID
 * @returns {Object} 对象
 */
exports.getQuizList = async (userID) => {
    try {
        // 获取用户已完成的测验
        const userQuizzes = await UserQuiz.findAll({
            where: { UserUserID: userID },
            attributes: ['QuizQuizID', 'lastTry', 'lastTryTime']
        });
        const userQuizIDs = userQuizzes.map(uq => uq.QuizQuizID);

        // 获取所有测验
        const allQuizzes = await Quiz.findAll({
            attributes: ['quizID', 'quizName', 'totalCredits', 'timer']
        });

        const response = {
            status: 0,
            message: "成功",
            quizzes: []
        };

        // 遍历所有测验并构建响应
        for (const quiz of allQuizzes) {
            const userQuiz = userQuizzes.find(uq => uq.QuizQuizID === quiz.quizID);
            const quizResponse = {
                quizID: quiz.quizID,
                quizName: quiz.quizName,
                totalCredits: quiz.totalCredits,
                timer: quiz.timer
            };

            // 如果用户完成了测验，添加 lastTry 和 lastTryTime
            if (userQuizIDs.includes(quiz.quizID)) {
                quizResponse.lastTry = userQuiz.lastTry;
                let date = userQuiz.lastTryTime;
                if (date !== null) {
                    let formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
                    quizResponse.lastTryTime = formattedDate;
                }
            }
            response.quizzes.push(quizResponse);
        }

        // 按 quizID 排序
        response.quizzes.sort((a, b) => a.quizID - b.quizID);

        return response;
    } catch (error) {
        logger.error('Error in /quizService.js/getQuizList: ', error);
        return { status: -9, message: '错误' };
    }
};

/**
 * getQuizDetails - 获取试卷列表
 * @param {integer} userID - 用户ID
 * @param {integer} quizID - 试卷ID
 * @returns {Object} 对象
 */
exports.getQuizDetails = async (userID, quizID) => {
    let response = {
        status: 0,
        message: "成功",
        quizName: "",
        totalCredits: 0,
        timer: 0,
        lastTry: undefined,
        lastTryTime: undefined,
        probs: []
    };
    try {
        const quiz = await Quiz.findByPk(quizID);
        if (!quiz) {
            return { status: 1, message: "无对应试题ID" };
        }
        const userExist = await User.findOne({ where: { userID } });
        if (!userExist) {
            return { status: 2, message: '无对应用户ID' };
        }
        response.quizName = quiz.quizName;
        response.totalCredits = quiz.totalCredits;
        response.timer = quiz.timer;
        // 查找与 userID 和 quizID 关联的 UserQuiz 记录
        const userQuiz = await UserQuiz.findOne({
            where: { UserUserID: userID, QuizQuizID: quizID }
        });
        if (userQuiz) {
            response.lastTry = userQuiz.lastTry;
            let date = userQuiz.lastTryTime;
            let formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
            response.lastTryTime = formattedDate;
        }
        // 查找与测验关联的所有题目
        const probs = await Prob.findAll({
            where: { quizID: quizID }
        });
        // 对于每个题目，查找用户的最后答案
        for (const prob of probs) {
            const userProb = await UserProb.findOne({
                where: { UserUserID: userID, ProbProbID: prob.probID }
            });
            const probDetail = {
                probID: prob.probID,
                probCredit: prob.probCredit,
                probText: prob.probText,
                probImg: prob.probImg,
                probAns: prob.probAns,
                lastAns: userProb ? userProb.lastAns : null
            };
            response.probs.push(probDetail);
        }
        return response;
    } catch (error) {
        logger.error('Error in /quizService.js/getQuizDetails: ', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * recordExamEntry - 记录用户考试信息
 * @param {Object} input - 输入对象
 * @param {integer} input.quizID - 试卷ID
 * @param {integer} input.userID - 用户ID
 * @param {integer} input.credit - 考试得分
 * @param {Date} input.lastTryTime - 考试时间
 * @param {Array} input.answers - 答案数组
 * @returns {Object} 对象
 * TODO: probNumber是否换成probID
 */
exports.recordExamEntry = async (input) => {
    try {
        const { quizID, userID, credit, lastTryTime, answers } = input;
        const quizExist = await Quiz.findByPk(quizID);
        if (!quizExist) {
            return { "status": 1, "message": "无对应试题ID" };
        }
        const userExist = await User.findByPk(userID);
        if (!userExist) {
            return { "status": 2, "message": "无对应用户ID" };
        }
        let time
        if (!lastTryTime) {
            time = new Date()
        } else {
            time = lastTryTime
        }
        // 检查 UserQuiz 表中是否存在相同的 userID 和 quizID 的记录，（不）存在则更新（创建）
        const userQuizEntry = await UserQuiz.findOne({
            where: { "UserUserID": userID, "QuizQuizID": quizID }
        });
        if (userQuizEntry) {
            await userQuizEntry.update({
                "lastTry": credit,
                "lastTryTime": time
            });
        } else {
            await UserQuiz.create({
                "QuizQuizID": quizID,
                "UserUserID": userID,
                "lastTry": credit,
                "lastTryTime": time
            });
        }
        // 遍历答案数组，处理每个答案
        for (const answer of answers) {
            const { probNumber, ans } = answer;
            // 检查 Prob 表中是否存在对应的 probNumber
            const prob = await Prob.findOne({ where: { "probID": probNumber } });
            if (!prob) {
                return { "status": 3, "message": "无对应题目ID" };
            }
            //TODO: 需要看题目本身类型，但是我们没必要为这个多建一个字段存类型（吗？）
            // 检查答案是否有效
            if (![1, 2, 3, 4].includes(ans)) {
                return { "status": 4, "message": "无对应题目答案" };
            }
            // 检查 UserProb 表中是否存在相同的 userID 和 probID 的记录，（不）存在则更新（创建）
            const userProbEntry = await UserProb.findOne({
                where: { "UserUserID": userID, "ProbProbID": prob.probID }
            });
            if (userProbEntry) {
                await userProbEntry.update({
                    "lastAns": ans
                });
            } else {
                await UserProb.create({
                    "UserUserID": userID,
                    "ProbProbID": prob.probID,
                    "lastAns": ans
                });
            }
        }
        return { "status": 0, "message": "成功" };
    } catch (error) {
        logger.error('Error in /quizService.js/recordExamEntry: ', error);
        return { status: -9, message: '错误' };
    }
}

