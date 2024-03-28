/**
 * 文件: 3DVirtualTour.js
 * 描述: 3D导览
 * 作者: {HGN}
 */

const Department = require('../models/Department');
const Item = require('../models/Item');


/**
 * getItemDetail - 获取3D虚拟导览中物品详情
 * @param {integer} itemID - 物品ID
 * @returns {Object} 包含物品详情的对象
 */
exports.getItemDetail = async (itemID) => {
    try {
        // 查询物品详情
        const item = await Item.findByPk(itemID);

        if (!item) {
            return { status: 1, message: '无对应itemID' };
        }

        return { 
            status: 0, 
            message: '成功', 
            itemName: item.itemName, 
            itemIntro: item.itemIntro 
        };
    } catch (error) {
        console.error('Error in getItemDetail:', error);
        return { status: -9, message: '失败' };
    }
}

/**
 * getDepartmentList - 获取3D虚拟导览中科室列表
 * @returns {Object} 包含科室列表的对象
 */

exports.getDepartmentList = async () => {
    try {
        // 查询科室列表，假设这是一个异步操作
        const departments = await Department.findAll({ attributes: ['departmentID', 'departmentName'] });

        // 构造返回对象
        const response = {
            status: 0,
            message: '成功',
            departments: departments.map(department => ({
                departmentID: department.departmentID,
                departmentName: department.departmentName
            }))
        };

        return response;
    } catch (error) {
        console.error('Error in getDepartmentList:', error);
        return { status: -9, message: '失败' };
    }
}


/**
 * getDepartmentDetail - 获取3D虚拟导览中科室详情
 * @param {integer} departmentID - 科室ID
 * @returns {Object} 包含科室详情的对象
 */
exports.getDepartmentDetail = async (departmentID) => {
    try {
        // 查询科室详情，假设这是一个异步操作
        const department = await Department.findByPk(departmentID);

        if (!department) {
            return { status: 1, message: '无对应departmentID' };
        }

        // 查询属于该科室的物品列表
        const departmentItems = await Item.findAll({ where: { departmentID }, attributes: ['itemID'] });

        // 构造返回对象
        const response = {
            status: 0,
            message: '成功',
            departmentName: department.departmentName,
            departmentIntro: department.departmentIntro,
            departmentItems: departmentItems.map(item => item.itemID)
        };

        return response;
    } catch (error) {
        console.error('Error in getDepartmentDetail:', error);
        return { status: -9, message: '失败' };
    }
}


/**
 * updateItemInfo - 修改物品信息
 * @param {integer} itemID - 物品ID
 * @param {string} itemName - 物品名称
 * @param {string} itemIntro - 物品简介
 * @returns {Object} 包含修改结果的对象
 */

exports.updateItemInfo = async (itemID, itemName, itemIntro) => {
    try {
        // 查询要修改的物品是否存在
        const item = await Item.findByPk(itemID);
        if (!item) {
            return { status: 1, message: '无对应itemID' };
        }

        // 更新物品信息
        await Item.update({ itemName, itemIntro }, { where: { itemID } });

        return { status: 0, message: '成功' };
    } catch (error) {
        console.error('Error in updateItemInfo:', error);
        return { status: -9, message: '失败' };
    }
}

/**
 * updateDepartmentInfo - 修改科室信息
 * @param {integer} departmentID - 科室ID
 * @param {string} departmentName - 科室名称
 * @param {string} departmentIntro - 科室简介
 * @returns {Object} 包含修改结果的对象
 */
exports.updateDepartmentInfo = async (departmentID, departmentName, departmentIntro) => {
    try {
        // 查询科室是否存在
        const department = await Department.findByPk(departmentID);
        if (!department) {
            return { status: 1, message: '无对应departmentID' };
        }

        // 更新科室信息
        await Department.update(
            { departmentName, departmentIntro },
            { where: { departmentID } }
        );

        return { status: 0, message: '成功' };
    } catch (error) {
        console.error('Error in updateDepartmentInfo:', error);
        return { status: -9, message: '失败' };
    }
}


