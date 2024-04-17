/**
 * 文件: vtService.js
 * 描述: 3D导览
 * 作者: {HGN}
 */

const Department = require('../models/Department');
const Item = require('../models/Item');

const loggerConfigurations = [
    { name: 'admin', level: 'info' },
    { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

/**
 * updateItemInfo - 修改物品信息
 * @param {integer} itemID - 物品ID
 * @param {string} itemName - 物品名称
 * @param {string} itemIntro - 物品简介
 * @returns {Object} 包含修改结果的对象
 */
exports.updateItemInfo = async (itemID, itemName, itemIntro, itemURL) => {
    try {
        const item = await Item.findByPk(itemID);
        if (!item) {
            return { status: 1, message: '无对应itemID' };
        }
        await Item.update({ itemName, itemIntro, itemURL }, { where: { itemID } });
        return { status: 0, message: '成功' };
    } catch (error) {
        logger.error('Error in vtAdminService.js/updateItemInfo: ', error);
        return { status: -9, message: '失败' };
    }
}

