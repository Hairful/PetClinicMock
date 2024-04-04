/**
 * 文件: /backend/src/controllers/quizController.js
 * 描述: 试题信息接口的控制器
 * 作者: {YYZ}
 */

const { getQuizDetails, getQuizList, recordExamEntry } = require('../services/quizService')

exports.getQuizList = async (req, res) => {
    try {
        const result = await getQuizList(req.userIDInToken);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case 2:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getQuizList:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.getQuizDetail = async (req, res) => {
    try {
        const { quizID } = req.query;
        const result = await getQuizDetails(req.userIDInToken, quizID);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getQuizDetail:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}

exports.recordExamEntry = async (req, res) => {
    try {
        req.body.userID = req.userIDInToken;
        const result = await recordExamEntry(req.body);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case 2:
                httpStatus = 404;
                break;
            case 3:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in recordExamEntry:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}