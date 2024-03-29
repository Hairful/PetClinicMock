/**
 * 文件: /backend/src/routes/roleRoute.js
 * 描述: 角色扮演信息接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { isQueryValid } = require('../middlewares/formatCheck');
const { isTokenValid } = require('../middlewares/authMiddleware');
const { getJobList, getJobDetail } = require('../controllers/roleController');

const paramsInQueryOfDetail = ['role', 'job'];
const paramsInQueryOfList = ['role'];

//不启用Token认证
router.get('/list', isQueryValid(paramsInQueryOfList), getJobList);
router.get('/detail', isQueryValid(paramsInQueryOfDetail), getJobDetail);

//启用Token认证
/* 
router.get('/list', isTokenValid,isQueryValid(paramsInQueryOfList), getQuizList);
router.get('/detail', isTokenValid,isQueryValid(paramsInQueryOfDetail), getQuizDetail);
*/
module.exports = router;