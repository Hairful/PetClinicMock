/**
 * 文件: /backend/src/services/userAuthService.js
 * 描述: 用户验证服务，处理注册、登录逻辑
 * 作者: {YYZ}
 */

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { encrypt, decrypt, hashPassword, generateSalt } = require('../utils/cryptoUtil');
const { tokenKey } = require('../config/authConfig')
const { redisStatus, redisClient } = require('../config/redisClient'); // 引入redisClient
const { warn, level } = require('winston');

const loggerConfigurations = [
    { name: 'info-auth', level: 'info' },
    { name: 'error-auth', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * registerUser - 用户登录函数
 * @param {string} userName - 用户名
 * @param {string} password - 密码
 * @returns {Object} 包含注册结果的对象
 */
exports.registerUser = async (userName, password) => {
    try {
        const userExist = await User.findOne({ where: { userName } });
        if (userExist) {
            return { status: 1, message: '重复用户名' };
        }
        const salt = generateSalt();
        const hashedPassword = hashPassword(password, salt);
        const newUser = await User.create({ userName: userName, password: hashedPassword, salt: salt });
        if (redisStatus) {
            try {
                await redisClient.set(`user:${userName}`, JSON.stringify({ password: hashedPassword, isAdmin: false, userID: newUser.userID, salt: salt }), {
                    EX: 300,
                    NX: false
                });
            } catch (redisError) {
                logger.error('Redis error in registerUser: ', redisError);
                logger.warn('Unable to store user data into Redis as Redis is not available.');
            }
        } else {
            logger.warn('Unable to store user data into Redis as Redis is not available.');
        }
        return { status: 0, message: '注册成功', userID: newUser.userID };
    } catch (error) {
        logger.error('Error in /userAuthService.js/registerUser: ', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * loginUser - 用户登录函数
 * @param {string} userName - 用户名
 * @param {string} password - 密码
 * @returns {Object} 包含登录结果的对象
 */
exports.loginUser = async (userName, password) => {
    try {
        let cooldown
        let userExist
        if (redisStatus) {
            try {
                cooldown = await redisClient.get(`cooldown:${userName}`);
                if (cooldown) {
                    return { status: 3, message: '尝试次数过多，5分钟内禁止登录' };
                }
            } catch (redisError) {
                logger.error('Redis error in loginUser: ', redisError);
                logger.warn('Unable to fetch cooldown data from Redis as error in Redis.');
            }
            try {
                userExist = await redisClient.get(`user:${userName}`);
                if (userExist) {
                    userExist = JSON.parse(userExist);
                }
            } catch (redisError) {
                logger.error('Redis error in loginUser: ', redisError);
                logger.warn('Fetching data from database as error in Redis');
            }
        } else {
            logger.warn('Fetching data from database as Redis is not available.');
        }
        if (!userExist) {
            userExist = await User.findOne({ where: { userName } });
        }
        if (!userExist) {
            return { status: 2, message: '无对应用户名' };
        }
        const hashedPassword = hashPassword(password, userExist.salt);
        if (userExist.password !== hashedPassword) {
            if (redisStatus) {
                try {
                    const attempts = await redisClient.incr(`attempts:${userName}`);
                    if (attempts === 1) {
                        await redisClient.expire(`attempts:${userName}`, 5 * 60);
                    }
                    if (attempts >= 5) {
                        await redisClient.set(`cooldown:${userName}`, 'true', {
                            EX: 300,
                            NX: true
                        }, 5 * 60);
                    }
                } catch (redisError) {
                    logger.error('Redis error in loginUser: ', redisError);
                    logger.warn('Unable to fetch attempts data from Redis as error in Redis.');
                }
            } else {
                logger.warn('Unable to fetch attempts data from Redis as Redis is not available.');
            }
            return { status: 1, message: '用户名或密码错误' };
        }
        if (redisStatus) {
            try {
                await redisClient.set(`user:${userName}`, JSON.stringify({ password: userExist.password, isAdmin: userExist.isAdmin, userID: userExist.userID, salt: userExist.salt }), {
                    EX: 300,
                    NX: false
                });
                await redisClient.del(`attempts:${userName}`);
            } catch (redisError) {
                logger.error('Redis error in loginUser: ', redisError);
                logger.warn('Unable to manage data as error in Redis.');
            }
        } else {
            logger.warn('Unable to manage data from Redis as Redis is not available.');
        }
        const token = jwt.sign({ userID: userExist.userID, isAdmin: userExist.isAdmin }, tokenKey, { expiresIn: '1h' });
        return { status: 0, message: '登录成功', userID: userExist.userID, token: token, isAdmin: userExist.isAdmin };
    } catch (error) {
        logger.error('Error in /userAuthService.js/loginUser :', error);
        return { status: -9, message: '错误' };
    }
}
