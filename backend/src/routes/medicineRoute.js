/**
 * 文件: /backend/src/routes/medicineRoute.js
 * 描述: 药品信息接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { getMedicineDetail, getMedicineList } = require('../controllers/medicineController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid } = require('../middlewares/authMiddleware');

const paramsInQueryOfList = [];
const paramsInQueryOfDetail = ['medicineID'];

//不启用Token认证
router.get('/list', isQueryValid(paramsInQueryOfList), getMedicineList);
router.get('/detail', isQueryValid(paramsInQueryOfDetail), getMedicineDetail);

//启用Token认证
/* 
router.post('/list',  getMedicineList);
router.post('/detail', isTokenValid, isQueryValid(paramsInQueryOfDetail), getMedicineDetail);
*/
module.exports = router;