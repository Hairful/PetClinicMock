/**
 * 文件: /backend/src/services/caseService.js
 * 描述: 病例信息服务，处理病例相关逻辑
 * 作者: {SSR; YYZ}
 */

const Case = require('../models/Case');
const Disease = require('../models/Disease');
const Medicine = require('../models/Medicine');
const Media = require('../models/Media');
const sequelize = require('../config/database');
const { Op } = require('sequelize');
const Fuse = require('fuse.js');

const loggerConfigurations = [
  { name: 'case', level: 'info' },
  { name: 'error', level: 'error' }
];
const logger = require('../utils/logUtil')(loggerConfigurations);

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
      return { status: 1, message: "无对应疾病ID" };
    }
  } catch (error) {
    logger.error('Error in /caseService.js/getCaseList: ', error);
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
          model: Media,
          through: { attributes: [] },
          attributes: ['mediaType', 'mediaURL']
        }
      ]
    });

    if (!caseInfo) {
      return { status: 1, message: "无对应病例ID" };
    }
    const caseMedicines = await sequelize.query(
      'SELECT `MedicineMedicineID` ,`dosage` FROM `casemedicine` WHERE `CaseCaseID` = :caseID',
      {
        replacements: { caseID: caseID },
        type: sequelize.QueryTypes.SELECT
      }
    );

    const medicineIDs = caseMedicines.map(cm => cm.MedicineMedicineID);


    const medicines = await Medicine.findAll({
      where: { medicineID: medicineIDs },
      attributes: ['medicineID', 'medicineName', 'medicineIntro']
    });

    const groupedMedia = caseInfo.Media.reduce((acc, media) => {
      if (acc[media.mediaType]) {
        acc[media.mediaType].push(media.mediaURL);
      } else {
        acc[media.mediaType] = [media.mediaURL];
      }
      return acc;
    }, {});

    return {
      status: 0,
      message: "成功",
      examine: caseInfo.examine,
      summary: caseInfo.summary,
      treatment: caseInfo.treatment,
      diseases: caseInfo.Disease,
      medicines: medicines.map(med => {
        const caseMedicine = caseMedicines.find(cm => cm.MedicineMedicineID === med.medicineID);
        return {
          medicineID: med.medicineID,
          medicineName: med.medicineName,
          medicineIntro: med.medicineIntro,
          dosage: caseMedicine ? caseMedicine.dosage : null
        };
      }),
      ...groupedMedia
    };
  } catch (error) {
    logger.error('Error in /caseService.js/getCaseDetail: ', error);
    return { status: -9, message: "错误" };
  }
};
exports.getCaseByString = async (searchString) => {
  try {
    let cases = await Case.findAll({
      attributes: ['caseID', 'summary', 'examine', 'diagnose', 'treatment']
    });
    cases = cases.map(c => c.get({ plain: true }));
    if (searchString == undefined) {
      return {
        status: 0,
        message: "成功",
        cases: cases
      };
    }
    if (!searchString.trim()) {
      return {
        status: 0,
        message: "成功",
        cases: cases
      };
    }

    const options = {
      includeScore: true,
      keys: ['caseID', 'summary', 'examine', 'diagnose', 'treatment'],
      threshold: 0.7, // 调整匹配敏感度
    };

    // 创建Fuse对象
    const fuse = new Fuse(cases, options);

    // 使用Fuse.js进行搜索
    const results = fuse.search(searchString);

    if (results.length > 0) {
      return {
        status: 0,
        message: "成功",
        cases: results.map(result => result.item)
      };
    } else {
      return { status: 1, message: "无对应信息" };
    }
  } catch (error) {
    logger.error('Error in /caseService.js/getCaseByString: ', error);
    return { status: -9, message: "错误" };
  }
};
