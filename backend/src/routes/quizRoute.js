/**
 * 文件: /backend/src/routes/quizRoute.js
 * 描述: 试题信息接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { getQuizDetail, getQuizList, recordExamEntry } = require('../controllers/quizController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid } = require('../middlewares/authMiddleware');

const paramsInBodyOfResult = ['quizID', 'userID', 'credit', 'answers'];
const paramsInQueryOfList = ['userID'];
const paramsInQueryOfDetail = ['quizID', 'userID'];

//不启用Token认证
/*
router.get('/list', isQueryValid(paramsInQueryOfList), getQuizList);
router.get('/detail', isQueryValid(paramsInQueryOfDetail), getQuizDetail);
router.post('/result', isBodyValid(paramsInBodyOfResult), recordExamEntry);
*/

//启用Token认证

router.get('/list', isTokenValid, isQueryValid(paramsInQueryOfList), getQuizList);
router.get('/detail', isTokenValid, isQueryValid(paramsInQueryOfDetail), getQuizDetail);
router.post('/result', isTokenValid, isBodyValid(paramsInBodyOfResult), recordExamEntry);

module.exports = router;