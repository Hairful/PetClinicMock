/**
 * 文件: /backend/src/routes/medicineRoute.js
 * 描述: 药品信息接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { getItemDetail, getDepartmentList, getDepartmentDetail } = require('../controllers/vtController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid } = require('../middlewares/authMiddleware');

const paramsInQueryOfDepartmentList = [];
const paramsInQueryOfDepartmentDetail = ['departmentID'];
const paramsInQueryOfItemDetail = ['itemID'];

router.get('/item', isTokenValid, getItemDetail);

module.exports = router;