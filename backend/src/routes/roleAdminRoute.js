/**
 * 文件: /backend/src/routes/adminUserRoute.js
 * 描述: 用户管理接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { createJob, updateJob, deleteJob } = require('../controllers/roleAdminController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');

const paramsInQueryOfDelete = ['role', 'job']

router.post('', isTokenValid, isTokenAdmin, createJob);
router.put('', isTokenValid, isTokenAdmin, updateJob);
router.delete('', isTokenValid, isTokenAdmin, isQueryValid(paramsInQueryOfDelete), deleteJob);

module.exports = router;