/**
 * 文件: /backend/src/routes/userAuthRoute.js
 * 描述: 用户验证接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const userAuthController = require('../controllers/userAuthController');
const { isBodyValid } = require('../middlewares/formatCheck')

const paramsInBody = ['userName', 'password'];

router.post('/register', isBodyValid(paramsInBody), userAuthController.registerUser);
router.post('/login', isBodyValid(paramsInBody), userAuthController.loginUser);

module.exports = router;
