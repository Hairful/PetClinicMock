/**
 * 文件: /backend/src/services/roleAdminService.js
 * 描述: 试题信息服务，处理获取试卷、题目相关逻辑
 * 作者: {SSR}
 */

const Job = (require('../models/Job'));

/**
 * createJob - 创建工作
 * @param {integer} role - 角色
 * @param {string} job - 工作
 * @param {string} jobDetail - 工作详情
 * @returns {Object} 对象
 */
exports.createJob = async (role, job, jobDetail) => {
    try {
        const result = await Job.create({ role, job, jobDetail });
        return { status: 0, message: '成功' };
    } catch (error) {
        console.error('Error In createJob', error);
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
exports.updateJob = async (role, prevJob, job, jobDetail) => {
    try {
        const rolejob = await Job.findOne({
            where: { role }
        });
        if (!rolejob) {
            return { status: 1, message: '无对应role' };
        }
        const roleInstance = await Job.findOne({
            where: { role, job }
        });
        if (!roleInstance) {
            return { status: 2, message: '无对应job' };
        }
        const result = await Job.findOne({
            where: { role, job }
        });
        if (jobDetail !== undefined) {
            result.jobDetail = jobDetail;
        }
        await result.save();
        return { status: 0, message: '成功' };
    } catch (error) {
        console.error('Error In updateJob', error);
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
            return { status: 1, message: '无对应role' };
        }
        const roleIns = await Job.findOne({
            where: { role, job }
        });
        if (!roleIns) {
            return { status: 2, message: '无对应job' };
        }
        const roleInstance = await Job.findOne({
            where: { role, job }
        });
        await roleInstance.destroy();
        return { status: 0, message: '成功' };
    } catch (error) {
        console.error('Error In deleteJob', error);
        return { status: -9, message: '错误' };
    }
}

