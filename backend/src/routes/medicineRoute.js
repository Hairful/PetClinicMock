/**
 * 文件: /backend/src/routes/medicineRoute.js
 * 描述: 药品信息接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { getMedicineDetail, getMedicineList } = require('../controllers/medicineController');
const { isQueryValid } = require('../middlewares/formatCheck');
const { isTokenValid } = require('../middlewares/authMiddleware');

const paramsInQueryOfList = [];
const paramsInQueryOfDetail = ['medicineID'];

//启用Token认证

router.get('/list', isTokenValid, isQueryValid(paramsInQueryOfList), getMedicineList);
router.get('/detail', isTokenValid, isQueryValid(paramsInQueryOfDetail), getMedicineDetail);

module.exports = router;