/**
 * 文件: /backend/src/routes/adminUserRoute.js
 * 描述: 用户管理接口的路由
 * 作者: {YYZ}
 */

const express = require('express');
const router = express.Router();
const { getUserList, createUser, updateUser, deleteUser } = require('../controllers/userAdminController');
const { isQueryValid, isBodyValid } = require('../middlewares/formatCheck');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');

const paramsInQueryOfList = [];
const paramsInBodyOfCreate = ['userName', 'password', 'isAdmin'];
const paramsInQueryOfDelete = ['userID']

//不启用Token认证
/*
router.get('', isQueryValid(paramsInQueryOfList), getUserList);
router.post('', isBodyValid(paramsInBodyOfCreate), createUser);
router.put('', updateUser);
router.delete('', isQueryValid(paramsInQueryOfDelete), deleteUser);
*/
//启用Token认证

router.get('', isTokenValid, isTokenAdmin, isQueryValid(paramsInQueryOfList), getUserList);
router.post('', isTokenValid, isTokenAdmin, isBodyValid(paramsInBodyOfCreate), createUser);
router.put('', isTokenValid, isTokenAdmin, updateUser);
router.delete('', isTokenValid, isTokenAdmin, isQueryValid(paramsInQueryOfDelete), deleteUser);


module.exports = router;