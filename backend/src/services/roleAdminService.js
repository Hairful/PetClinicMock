const Role = (require('../models/Role'));
//添加工作
exports.addJob = async (role, job, jobDetail) => {
    try {

        const result = await Role.create({
            role,
            job,
            jobDetail
        });
        return {
            status: 0,
            message: '成功'
        };
    } catch (error) {
        console.error('Error In addJob', error);
        return {
            status: -9,
            message: `错误`,
        };

    }
}
//更新工作
exports.modifyJob = async (role, job, jobDetail) => {
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
        const result = await Role.findOne({
            where: { role, job }
        });
        result.jobDetail = jobDetail;
        await result.save();
        return {
            status: 0,
            message: '成功'
        };
    } catch (error) {
        console.error('Error In modifyJob', error);
        return {
            status: -9,
            message: `错误`,
        };

    }
}
//删除工作
exports.deleteJob = async (role, job) => {
    try {
        const rolejob = await Role.findOne({
            where: { role }
        });

        if (!rolejob) {
            return { status: 1, message: '无对应role' };
        }
        const roleIns = await Role.findOne({
            where: { role, job }
        });


        // If no role is found
        if (!roleIns) {
            return { status: 2, message: '无对应job' };
        }
        const roleInstance = await Role.findOne({
            where: { role, job }
        });
        await roleInstance.destroy();
        return {
            status: 0,
            message: '成功'
        };

    } catch (error) {
        console.error('Error In deleteJob', error);
        return {
            status: -9,
            message: `错误`,
        };
    }
}

