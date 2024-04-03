/**
 * 文件: vtService.js
 * 描述: 3D导览
 * 作者: {HGN}
 */

const Department = require('../models/Department');
const Item = require('../models/Item');

/**
 * updateItemInfo - 修改物品信息
 * @param {integer} itemID - 物品ID
 * @param {string} itemName - 物品名称
 * @param {string} itemIntro - 物品简介
 * @returns {Object} 包含修改结果的对象
 */
exports.updateItemInfo = async (itemID, itemName, itemIntro) => {
    try {
        const item = await Item.findByPk(itemID);
        if (!item) {
            return { status: 1, message: '无对应itemID' };
        }
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
        const department = await Department.findByPk(departmentID);
        if (!department) {
            return { status: 1, message: '无对应departmentID' };
        }
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