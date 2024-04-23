/**
 * 文件: /backend/src/services/roleAdminService.js
 * 描述: 试题信息服务，处理获取试卷、题目相关逻辑
 * 作者: {SSR}
 */

const Job = (require('../models/Job'));

const loggerConfigurations = [
    { name: 'info-admin', level: 'info' },
    { name: 'error-admin', level: 'warn' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * createJob - 创建工作
 * @param {integer} role - 角色
 * @param {string} job - 工作
 * @param {string} jobDetail - 工作详情
 * @returns {Object} 对象
 */
exports.createJob = async (role, job, jobDetail, roomID) => {
    try {
        const jobexist = await Job.findOne({
            where: { job: job }
        });
        if (jobexist) {
            return { status: 2, message: '重复的工作' };
        }
        if (roomID != undefined) {
            const result = await Job.create({ role, job, jobDetail, roomID });
        }
        else {
            const result = await Job.create({ role, job, jobDetail })
        }
        return { status: 0, message: '成功' };
    } catch (error) {
        logger.error('Error in /roleAdminService.js/createJob: ', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * updateJob - 更新工作
 * @param {integer} role - 角色
 * @param {string} job - 工作
 * @param {string} jobDetail - 工作详情
 * @returns {Object} 对象
 */
exports.updateJob = async (role, prevJob, job, jobDetail, roomID) => {
    try {

        if (prevJob == undefined) {
            const rolejob = await Job.findOne({
                where: { role }
            });
            if (!rolejob) {
                return { status: 1, message: '无对应角色' };
            }
            const roleInstance = await Job.findOne({
                where: { role: role, job: job }
            });
            if (!roleInstance) {
                return { status: 2, message: '无对应工作' };
            }
            const result = await Job.findOne({
                where: { role, job }
            });

            if (jobDetail !== undefined) {
                result.jobDetail = jobDetail;

            }
            if (roomID != undefined) {
                result.roomID = roomID
            }
            await result.save();
            return { status: 0, message: '成功' };

        }
        else (prevJob !== undefined)
        {
            const jobexist = await Job.findOne({
                where: { job: job }
            });
            if (jobexist) {
                return { status: 3, message: '重复的工作' };
            }
            const rolejob = await Job.findOne({
                where: { role }
            });
            if (!rolejob) {
                return { status: 1, message: '无对应角色' };
            }
            const roleInstance = await Job.findOne({
                where: { role: role, job: prevJob }
            });
            if (!roleInstance) {
                return { status: 2, message: '无对应工作' };
            }
            const result = await Job.findOne({
                where: { role: role, job: prevJob }
            });
            result.job = job;
            if (jobDetail !== undefined) {
                result.jobDetail = jobDetail;

            }
            if (roomID != undefined) {
                result.roomID = roomID
            }
            await result.save();
            return { status: 0, message: '成功' };
        }


    } catch (error) {
        logger.error('Error in /roleAdminService.js/updateJob', error);
        return { status: -9, message: '错误' };
    }
}

/**
 * deleteJob - 删除工作
 * @param {integer} role - 角色
 * @param {string} job - 工作
 * @returns {Object} 对象
 */
exports.deleteJob = async (role, job) => {
    try {
        const rolejob = await Job.findOne({
            where: { role }
        });
        if (!rolejob) {
            return { status: 1, message: '无对应角色' };
        }
        const roleIns = await Job.findOne({
            where: { role, job }
        });
        if (!roleIns) {
            return { status: 2, message: '无对应工作' };
        }
        const roleInstance = await Job.findOne({
            where: { role, job }
        });
        await roleInstance.destroy();
        return { status: 0, message: '成功' };
    } catch (error) {
        logger.error('Error in /roleAdminService.js/deleteJob: ', error);
        return { status: -9, message: '错误' };
    }
}

