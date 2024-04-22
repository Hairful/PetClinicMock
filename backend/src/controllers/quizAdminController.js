/**
 * 文件: /backend/src/controllers/quizAdminController.js
 * 描述: 试题管理接口的控制器
 * 作者: {YYZ}
 */

const { createQuizWithProbs, updateQuiz, deleteQuiz } = require('../services/quizAdminService');

const loggerConfigurations = [
    { name: 'info-admin', level: 'info' },
    { name: 'error-admin', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

exports.createQuiz = async (req, res) => {
    try {
        const result = await createQuizWithProbs(req.body);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 400;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        logger.info({ administratorID: req.userIDInToken, message: 'createQuiz: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /quizAdminController.js/createQuiz: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateQuiz = async (req, res) => {
    try {
        const result = await updateQuiz(req.body);
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
        logger.info({ administratorID: req.userIDInToken, message: 'updateQuiz: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /quizAdminController.js/updateQuiz: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.deleteQuiz = async (req, res) => {
    try {
        const { quizID } = req.query;
        const result = await deleteQuiz(quizID);
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
        logger.info({ administratorID: req.userIDInToken, message: 'deleteQuiz: ' + result.message });
        res.status(httpStatus).json(result);
    } catch (error) {
        logger.error('Error in /quizAdminController.js/deleteQuiz: ', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};