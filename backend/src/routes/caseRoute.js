/**
 * 文件: /backend/src/routes/caseRoute.js
 * 描述: 病例信息接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { getCaseDetail, getCaseList } = require('../controllers/caseController');
const { isQueryValid } = require('../middlewares/formatCheck');
const { isTokenValid } = require('../middlewares/authMiddleware');

const paramsInQueryOfDetail = ['caseID'];

//不启用Token认证
/*
router.get('/list', getCaseList);
router.get('/detail', isQueryValid(paramsInQueryOfDetail), getCaseDetail);
*/

//启用Token认证
router.get('/list', isTokenValid, getCaseList);
router.get('/detail', isTokenValid, isQueryValid(paramsInQueryOfDetail), getCaseDetail);


module.exports = router;