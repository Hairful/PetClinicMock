/**
 * 文件: vtService.js
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
exports.getItemDetail = async () => {
    try {
        const items = await Item.findAll();

        const itemDetails = items.map(item => ({
            itemID: item.itemID,
            itemName: item.itemName,
            itemIntro: item.itemIntro,
            itemURL: item.itemURL
        }));

        return {
            status: 0,
            message: '成功',
            data: itemDetails
        };
    } catch (error) {
        console.error('Error in getItemDetail:', error);
        return { status: -9, message: '失败' };
    }
}