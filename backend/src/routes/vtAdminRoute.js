/**
 * 文件: /backend/src/routes/vtAdminRoute.js
 * 描述: 试题管理接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { updateItem, updateDepartment } = require('../controllers/vtAdminController');
const { isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');

router.put('/item', isTokenValid, isTokenAdmin, updateItem);


module.exports = router;