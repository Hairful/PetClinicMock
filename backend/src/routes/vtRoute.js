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

//不启用Token认证
/*
router.get('/item/detail', isQueryValid(paramsInQueryOfItemDetail), getItemDetail);
router.get('/department/detail', isQueryValid(paramsInQueryOfDepartmentDetail), getDepartmentDetail);
router.get('/department/list', isQueryValid(paramsInQueryOfDepartmentList), getDepartmentList);
*/

//启用Token认证

router.get('/item/detail', isTokenValid, isQueryValid(paramsInQueryOfItemDetail), getItemDetail);
router.get('/department/detail', isTokenValid, isQueryValid(paramsInQueryOfDepartmentDetail), getDepartmentDetail);
router.get('/department/list', isTokenValid, isQueryValid(paramsInQueryOfDepartmentList), getDepartmentList);

module.exports = router;