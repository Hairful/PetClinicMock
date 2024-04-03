/**
 * 文件: /backend/src/controllers/userAdminController.js
 * 描述: 用户管理接口的控制器
 * 作者: {YYZ}
 */

const { getAllUsers, createUser, updateUser, deleteUser } = require('../services/userAdminService');

exports.getUserList = async (req, res) => {
    try {
        const result = await getAllUsers();
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in getUserList:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { userName, password, isAdmin } = req.body;
        const result = await createUser(userName, password, isAdmin);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 0:
                httpStatus = 400;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in createUser:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { userID, userName, password, isAdmin } = req.body;
        const result = await updateUser(userID, userName, password, isAdmin);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in updateUser:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { userID } = req.query;
        const result = await deleteUser(userID);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case 1:
                httpStatus = 404;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        console.error('Error in deleteUser:', error);
        res.status(500).json({ status: -9, message: '错误' });
    }
};