/**
 * 文件: /backend/src/routes/quizAdminRoute.js
 * 描述: 试题管理接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { createQuiz, updateQuiz, deleteQuiz } = require('../controllers/quizAdminController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');
const paramsInBodyOfCreat = ['quizName', 'totalCredits', 'timer', 'probs'];
const paramsInQueryOfDelete = ['quizID'];

router.post('', isTokenValid, isTokenAdmin, isBodyValid(paramsInBodyOfCreat), createQuiz);
router.put('', isTokenValid, isTokenAdmin, updateQuiz);
router.delete('', isTokenValid, isTokenAdmin, isQueryValid(paramsInQueryOfDelete), deleteQuiz);

module.exports = router;