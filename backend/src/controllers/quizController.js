/**
 * 文件: /backend/src/controllers/quizController.js
 * 描述: 试题信息接口的控制器
 * 作者: {YYZ}
 */

const { getQuizDetails, getQuizList, recordExamEntry } = require('../services/quizService')

const loggerConfigurations = [
    { name: 'info-quiz', level: 'info' },
    { name: 'error-quiz', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

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
        logger.info({ userID: req.userIDInToken, message: 'getQuizList: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /quizController.js/getQuizList: ', error);
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
        logger.info({ userID: req.userIDInToken, message: 'getQuizDetail: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /quizController.js/getQuizDetail: ', error);
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
            case 4:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ userID: req.userIDInToken, message: 'recordExamEntry: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /quizController.js/recordExamEntry: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
}