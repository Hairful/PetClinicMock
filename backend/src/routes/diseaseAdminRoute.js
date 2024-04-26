/**
 * 文件: /backend/src/routes/adminUserRoute.js
 * 描述: 用户管理接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { createDisease, deleteDisease, updateDisease } = require('../controllers/diseaseAdminController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');

const paramsInBodyOfCreate = ['diseaseType', 'diseaseName', 'diseaseIntro'];
const paramsInQueryOfDelete = ['diseaseID']

router.post('', isTokenValid, isTokenAdmin, isBodyValid(paramsInBodyOfCreate), createDisease);
router.put('', isTokenValid, isTokenAdmin, updateDisease);
router.delete('', isTokenValid, isTokenAdmin, isQueryValid(paramsInQueryOfDelete), deleteDisease);

module.exports = router;