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
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
      ]
    });
    if (!caseInfo) {
      return { status: 1, message: "无对应caseID" };
    }
    return {
      status: 0,
      message: "成功",
      diseases: caseInfo
    };
  } catch (error) {
    console.error('Error in getCaseDetails', error);
    return { status: -9, message: "错误" };
  }
};

