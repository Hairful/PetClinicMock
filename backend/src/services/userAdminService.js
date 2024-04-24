/**
 * 文件: /backend/src/services/userAdminService.js
 * 描述: 后台管理
 * 作者: {HGN}
 */

const User = require('../models/User');
const { encrypt, decrypt, hashPassword, generateSalt } = require('../utils/cryptoUtil')
const sequelize = require('../config/database')
const loggerConfigurations = [
    { name: 'info-admin', level: 'info' },
    { name: 'error-admin', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);
const { redisStatus, redisClient } = require('../config/redisClient');
/**
 * getAllUser - 获取所有用户
 * @returns {Object} 对象
 */
exports.getAllUsers = async () => {
    try {
        const usersFromDB = await User.findAll({ attributes: ['userID', 'userName', 'password', 'isAdmin'] });
        const users = usersFromDB.map(user => ({
            userID: user.userID,
            userName: user.userName,
            isAdmin: user.isAdmin
        }));
        return { status: 0, message: '成功', users };
    } catch (error) {
        logger.error('Error in userAdminService.js/getAllUsers: ', error);
        return { status: -9, message: '失败' };
    }
}

/**
 * createUser - 添加用户
 * @param {string} userName - 用户名
 * @param {string} password - 密码
 * @param {boolean} isAdmin - 是否为管理员
 * @returns {Object} 包含添加用户结果的对象
 */
exports.createUser = async (userName, password, isAdmin) => {
    try {
        const existingUser = await User.findOne({ where: { userName: userName } });
        if (existingUser) {
            return { status: 1, message: '重复的用户名' };
        }
        const salt = generateSalt();
        const hashedPassword = hashPassword(password, salt);

        const newUser = await User.create({
            'userName': userName,
            'password': hashedPassword,
            'isAdmin': isAdmin,
            'salt': salt
        });
        redisClient.flushAll().then((result) => {
            logger.info('FlushAll result:', result);
        }).catch((error) => {
            logger.error('FlushAll error:', error);
        });
        return { status: 0, message: '成功', userID: newUser.userID };
    }
    catch (error) {
        logger.error('Error in userAdminService.js/createUser: ', error);
        return { status: -9, message: '失败' };
    }
}

/**
 * updateUser - 修改用户信息
 * @param {integer} userID - 用户ID
 * @param {string} userName - 用户名 (可选)
 * @param {string} password - 密码 (可选)
 * @param {boolean} isAdmin - 是否为管理员 (可选)
 * @returns {Object} 包含修改用户信息结果的对象
 */
exports.updateUser = async (userID, userName, password, isAdmin) => {
    const t = await sequelize.transaction();
    try {
        const user = await User.findByPk(userID, { transaction: t });
        if (!user) {
            await t.rollback();
            return { status: 1, message: '无对应用户ID' };
        }
        if (userName) {
            const userExist = await User.findOne({ where: { userName: userName } }, { transaction: t });
            if (userExist !== null) {
                if (userExist.userID !== userID) {
                    await t.rollback();
                    return { status: 2, message: '重复的用户名' };
                } else {
                    user.userName = userName;
                }
            }
            else {
                user.userName = userName;
            }
        }
        if (password) user.password = hashPassword(password, user.salt);
        if (isAdmin !== undefined) user.isAdmin = isAdmin;
        await user.save({ transaction: t });
        await t.commit();
        redisClient.flushAll().then((result) => {
            logger.info('FlushAll result:', result);
        }).catch((error) => {
            logger.error('FlushAll error:', error);
        });
        return { status: 0, message: '成功' };
    } catch (error) {
        await t.rollback();
        logger.error('Error in Error in userAdminService.js/updateUser: ', error);
        return { status: -9, message: '失败' };
    }
}


/**
 * deleteUser - 删除用户信息函数
 * @param {integer} userID - 用户ID
 * @returns {Object} 包含删除用户信息结果的对象
 */
exports.deleteUser = async (userID) => {
    try {
        const user = await User.findByPk(userID);
        if (!user) {
            return { status: 1, message: '无对应用户ID' };
        }
        await user.destroy();
        redisClient.flushAll().then((result) => {
            logger.info('FlushAll result:', result);
        }).catch((error) => {
            logger.error('FlushAll error:', error);
        });
        return { status: 0, message: '成功' };
    } catch (error) {
        logger.error('Error in /userAdminService.js/deleteUser: ', error);
        return { status: -9, message: '失败' };
    }
}