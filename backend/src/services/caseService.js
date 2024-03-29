/**
 * 文件: /backend/src/services/caseService.js
 * 描述: 病例信息服务，处理病例相关逻辑
 * 作者: {SSR; YYZ}
 */

const Case = require('../models/Case');
const Disease = require('../models/Disease');
const Medicine = require('../models/Medicine');
const Media = require('../models/Media');

/**
 * getAllCases - 病例列表
 * @returns {Object} 对象
 */
exports.getCaseList = async (diseaseID) => {
  try {
    let cases
    if (diseaseID) {
      cases = await Case.findAll({
        where: { diseaseID: diseaseID },
        attributes: ['caseID', 'summary']
      });
    } else {
      cases = await Case.findAll({
        attributes: ['caseID', 'summary']
      });
    }
    if (cases.length > 0) {
      return {
        status: 0,
        message: "成功",
        cases: cases.map(c => ({
          caseID: c.caseID,
          summary: c.summary
        }))
      };
    } else {
      return { status: 1, message: "无对应diseaseID" };
    }
  } catch (error) {
    console.error('Error in getAllCases', error);
    return { status: -9, message: "错误" };
  }
}

/**
 * getCaseDetails - 获取病例详情
 * @param {integer} caseID - 病例ID
 * @returns {Object} 对象
 */
exports.getCaseDetail = async (caseID) => {
  try {
    const caseInfo = await Case.findByPk(caseID, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Disease,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        {
          model: Medicine,
          through: { attributes: [] },
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        {
          model: Media,
          through: { attributes: [] },
          attributes: ['mediaType', 'mediaURL'] // 只包含mediaType和mediaURL
        }
      ]
    });
    if (!caseInfo) {
      return { status: 1, message: "无对应caseID" };
    }

    // 使用reduce函数根据mediaType分组
    const groupedMedia = caseInfo.Media.reduce((acc, media) => {
      // 如果acc中已经有了这个mediaType，则将其mediaURL添加到数组中
      if (acc[media.mediaType]) {
        acc[media.mediaType].push(media.mediaURL);
      } else {
        // 如果是新的mediaType，则创建一个新数组
        acc[media.mediaType] = [media.mediaURL];
      }
      return acc;
    }, {});

    return {
      status: 0,
      message: "成功",
      diseases: caseInfo.Disease,
      medicines: caseInfo.Medicine,
      ...groupedMedia // 使用展开运算符将分组的media信息添加到返回对象中
    };
  } catch (error) {
    console.error('Error in getCaseDetail', error);
    return { status: -9, message: "错误" };
  }
};


