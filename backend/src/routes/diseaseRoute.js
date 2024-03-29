/**
 * 文件: /backend/src/routes/diseaseRoute.js
 * 描述: 疾病信息接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { getDiseaseTypes, getDiseaseList, getDiseaseDetail } = require('../controllers/diseaseController');
const { isQueryValid } = require('../middlewares/formatCheck')

const paramsInQueryOfType = [];
const paramsInQueryOfDetail = ['diseaseID'];

//不启用Token认证
router.get('/type', isQueryValid(paramsInQueryOfType), getDiseaseTypes);
router.get('/list', getDiseaseList);
router.get('/detail', isQueryValid(paramsInQueryOfDetail), getDiseaseDetail);

//启用Token认证
/* 
router.get('/type', isTokenValid,isQueryValid(paramsInQueryOfType), getDiseaseTypes);
router.get('/list', isTokenValid, getDiseaseList);
router.get('/detail', isTokenValid, isQueryValid(paramsInQueryOfDetail), getDiseaseDetail);
*/

module.exports = router;
