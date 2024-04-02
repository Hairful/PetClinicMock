/**
 * 文件: /backend/src/routes/adminUserRoute.js
 * 描述: 用户管理接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { createMedicine, deleteMedicine, updateMedicine } = require('../controllers/medicineAdminController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');

const paramsInBodyOfCreate = ['medicineName', 'medicineIntro'];
const paramsInQueryOfDelete = ['medicineID']

//不启用Token认证
/*
router.post('', isBodyValid(paramsInBodyOfCreate), createMedicine);
router.put('', updateMedicine);
router.delete('', isQueryValid(paramsInQueryOfDelete), deleteMedicine);
*/

//启用Token认证

router.post('', isTokenValid, isTokenAdmin, isBodyValid(paramsInBodyOfCreate), createMedicine);
router.put('', isTokenValid, isTokenAdmin, updateMedicine);
router.delete('', isTokenValid, isTokenAdmin, isQueryValid(paramsInQueryOfDelete), deleteMedicine);


module.exports = router;