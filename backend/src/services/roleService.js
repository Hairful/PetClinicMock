/**
 * 文件: /backend/src/services/roleService.js
 * 描述: 试题信息服务，处理获取试卷、题目相关逻辑
 * 作者: {SSR}
 */

const Job = require('../models/Job');

const loggerConfigurations = [
    { name: 'info-role', level: 'info' },
    { name: 'error-role', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * getJobList - 获取工作列表
 * @param {integer} role - 角色
 * @returns {Object} 对象
 */
exports.getJobList = async (role) => {
    try {
        const roles = await Job.findAll({
            where: { role: role },
            attributes: ['job'],
        });
        const jobs = roles.map((role) => role.job);
        if (jobs.length === 0) {
            return { status: 1, message: '无对应角色', };
        }
        return {
            status: 0,
            message: '成功',
            jobs: jobs,

        };
    } catch (error) {
        logger.error('Error In /roleService.js/getJobList', error);
        return { status: -9, message: `错误`, };
    }
}

/**
 * getJobDetail - 获取工作详情
 * @param {integer} role - 角色
 * @param {string} job - 工作 
 * @returns {Object} 对象
 */
exports.getJobDetail = async (role, job) => {
    try {
        const rolejob = await Job.findOne({ where: { role } });
        if (!rolejob) {
            return { status: 1, message: '无对应角色' };
        }
        const roleInstance = await Job.findOne({ where: { role, job } });
        if (!roleInstance) {
            return { status: 2, message: '无对应工作' };
        }
        return {
            status: 0,
            message: '成功',
            jobDetail: roleInstance.jobDetail,
            roomID: roleInstance.roomID
        }
    } catch (error) {
        logger.error('Error in /roleService.js/getJobDetail: ', error);
        return { status: -9, message: '错误' };
    }
}
