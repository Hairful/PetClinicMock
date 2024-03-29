const User = require('../models/User');
const Prob = require('../models/Prob');
const Quiz = require('../models/Quiz');
const UserProb = require('../models/UserProb');
const UserQuiz = require('../models/UserQuiz');
//查看试题列表
exports.getUserQuizzes = async (userID) => {
    try {
        // 从 UserQuiz 表中查询所有与 userID 相关的记录
        const userQuizzes = await UserQuiz.findAll({
            where: { UserUserID: userID },
            attributes: ['QuizQuizID', 'lastTry', 'lastTryTime']
        });

        // 如果没有找到记录，返回状态码为 1 的 JSON 对象
        if (!userQuizzes.length) {
            return {
                status: 1,
                message: "无对应userName"
            };
        }

        // 收集所有的 quizID
        const quizIDs = userQuizzes.map(uq => uq.QuizQuizID);

        // 准备响应对象
        const response = {
            status: 0,
            message: "成功",
            quizzes: []
        };

        // 使用收集到的 quizID 列表，从 Quiz 表中查询相关的测验信息
        for (const quizID of quizIDs) {
            const quiz = await Quiz.findByPk(quizID);
            if (quiz) {
                // 查找对应的 UserQuiz 记录以获取 lastTry 和 lastTryTime
                const userQuiz = userQuizzes.find(uq => uq.QuizQuizID === quizID);
                response.quizzes.push({
                    quizID: quiz.quizID,
                    quizName: quiz.quizName,
                    totalCredits: quiz.totalCredits,
                    lastTry: userQuiz ? userQuiz.lastTry : null,
                    lastTryTime: userQuiz && userQuiz.lastTryTime ? userQuiz.lastTryTime.toISOString() : null
                });
            }
        }

        // 返回包含所有测验信息的 JSON 对象
        return response;
    } catch (error) {
        console.error('Error In getUserQuizzes :', error);
        return {
            status: -9,
            message: "失败"
        };
    }
}
//查看试题详情
exports.getQuizDetails = async (userID, quizID) => {
    // 初始化响应对象
    let response = {
        status: 0,
        message: "成功",
        quizName: "",
        totalCredits: 0,
        lastTry: 0,
        lastTryTime: "",
        probs: []
    };

    try {
        // 根据 quizID 查找测验
        const quiz = await Quiz.findByPk(quizID);
        if (!quiz) {
            return {
                status: 1,
                message: "无对应quizID"
            };
        }

        // 更新响应对象中的测验信息
        response.quizName = quiz.quizName; // 假设 Quiz 模型中有一个 'name' 字段
        response.totalCredits = quiz.totalCredits; // 假设 Quiz 模型中有一个 'totalCredits' 字段

        // 查找与 userID 和 quizID 关联的 UserQuiz 记录
        const userQuiz = await UserQuiz.findOne({
            where: { UserUserID: userID, QuizQuizID: quizID }
        });

        // 如果存在 UserQuiz 记录，更新响应对象中的尝试信息
        if (userQuiz) {
            response.lastTry = userQuiz.lastTry;
            response.lastTryTime = userQuiz.lastTryTime;
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

            // 构建题目详情
            const probDetail = {
                probID: prob.probID,
                probCredit: prob.probCredit,
                probText: prob.probText,
                probImg: prob.probImg,
                probAns: prob.probAns,
                lastAns: userProb ? userProb.lastAns : null
            };

            // 将题目详情添加到响应对象中
            response.probs.push(probDetail);
        }

        // 返回响应对象
        return response;
    } catch (error) {
        console.error('Error In getQuizDetails:', error);
        return {
            status: -9,
            message: "失败"
        };
    }
}
//录入成绩
exports.recordExamEntry = async (input) => {
    try {
        const { quizID, userID, credit, lastTryTime, answers } = input;

        // 检查 Quiz 表中是否存在对应的 quizID
        const quizExists = await Quiz.findByPk(quizID);
        if (!quizExists) {
            return { "status": 1, "message": "无对应quizID" };
        }

        // 检查 User 表中是否存在对应的 userID
        const userExists = await User.findByPk(userID);
        if (!userExists) {
            return { "status": 2, "message": "无对应userID" };
        }

        // 检查 UserQuiz 表中是否存在相同的 userID 和 quizID 的记录
        const userQuizEntry = await UserQuiz.findOne({
            where: { "UserUserID": userID, "QuizQuizID": quizID }
        });

        // 如果存在记录，则更新，否则创建新记录
        if (userQuizEntry) {
            await userQuizEntry.update({
                "lastTry": credit,
                "lastTryTime": lastTryTime
            });
        } else {
            await UserQuiz.create({
                "QuizQuizID": quizID,
                "UserUserID": userID,
                "lastTry": credit,
                "lastTryTime": lastTryTime
            });
        }

        // 遍历答案数组，处理每个答案
        for (const answer of answers) {
            const { probNumber, ans } = answer;

            // 检查 Prob 表中是否存在对应的 probNumber
            const prob = await Prob.findOne({ where: { "probID": probNumber } });
            if (!prob) {
                return { "status": 3, "message": "无对应probNumber" };
            }

            // 检查答案是否有效（只能为 1 或 2）
            if (![1, 2].includes(ans)) {
                return { "status": 4, "message": "无对应probAns" };
            }

            // 检查 UserProb 表中是否存在相同的 userID 和 probID 的记录
            const userProbEntry = await UserProb.findOne({
                where: { "UserUserID": userID, "ProbProbID": prob.probID }
            });

            // 如果存在记录，则更新，否则创建新记录
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

        // 返回成功状态
        return { "status": 0, "message": "成功" };
    } catch (error) {
        console.error('Error In recordExamEntry:', error);
        return {
            status: -9,
            message: "失败"
        };
    }
}

