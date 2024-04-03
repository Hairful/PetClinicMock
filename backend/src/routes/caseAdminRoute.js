/**
 * 文件: /backend/src/routes/caseAdminRoute.js
 * 描述: 病例管理接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { createCase, updateCase, deleteCase } = require('../controllers/caseAdminController');
const { isQueryValid } = require('../middlewares/formatCheck');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');

const paramsInQueryOfDelete = ['caseID'];

router.post('', isTokenValid, isTokenAdmin, createCase);
router.put('', isTokenValid, isTokenAdmin, updateCase);
router.delete('', isTokenValid, isTokenAdmin, isQueryValid(paramsInQueryOfDelete), deleteCase);


module.exports = router;