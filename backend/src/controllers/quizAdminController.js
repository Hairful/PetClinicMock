/**
 * 文件: /backend/src/controllers/quizAdminController.js
 * 描述: 试题管理接口的控制器
 * 作者: {YYZ}
 */

const { createQuizWithProbs, updateQuiz, deleteQuiz } = require('../services/quizAdminService');

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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in createQuiz:', error);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in updateQuiz:', error);
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
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in deleteCase:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};