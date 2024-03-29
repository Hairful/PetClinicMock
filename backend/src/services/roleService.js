const Role = require('../models/Role');
//查找角色工作
exports.getJobsByRol = async (role) => {
    try {
        const roles = await Role.findAll({
            where: {
                role: role,
            },
            attributes: ['job'],
        });
        const jobs = roles.map((role) => role.job);
        if (jobs.length === 0) {
            return {
                status: 1,
                message: '无对应role',
            };
        }
        return {
            status: 0,
            message: '成功',
            jobs: jobs,
        };
    } catch (error) {
        console.error('Error In getJobsByRole', error);
        return {
            status: -9,
            message: `错误`,
        };
    }
}
//查看工作详情
exports.getJobDetail = async (role, job) => {
    try {
        const rolejob = await Role.findOne({
            where: { role }
        });
        if (!rolejob) {
            return { status: 1, message: '无对应role' };
        }

        const roleInstance = await Role.findOne({
            where: { role, job }
        });
        if (!roleInstance) {
            return { status: 2, message: '无对应job' };
        }
        return {
            status: 0,
            message: '成功',
            jobDetail: roleInstance.jobDetail
        }
    } catch (error) {
        console.error('Error In getJobDetail', error);
        return {
            status: -9,
            message: `错误`,
        };
    }
}
