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
const { redisClient, redisStatus } = require('../config/redisClient');
const loggerConfigurations = [
  { name: 'info-case', level: 'info' },
  { name: 'error-case', level: 'warn' }
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
      return { status: 1, message: "无对应diseaseID" };
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
    let [caseInfo, caseMedicines] = await Promise.all([
      getCaseInfoFromRedisOrDatabase(caseID),
      getCaseMedicinesFromRedisOrDatabase(caseID)
    ]);

    // 查询所有相关药品的详细信息
    const medicineIDs = caseMedicines.map(cm => cm.MedicineMedicineID);
    let medicines = await Medicine.findAll({
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
    logger.error('Error in getCaseDetail: ', error);
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
      return { status: 1, message: "No matches found" };
    }
  } catch (error) {
    logger.error('Error in /caseService.js/getCaseByString: ', error);
    return { status: -9, message: "错误" };
  }
};

async function getCaseInfoFromRedisOrDatabase(caseID) {
  let caseInfo;
  if (redisStatus()) {
    try {
      caseInfo = await redisClient.get(`caseInfo:${caseID}`);
      if (caseInfo) {
        caseInfo = JSON.parse(caseInfo);
      }
    } catch (redisError) {
      logger.error('Redis error in getCaseDetail: ', redisError);
      logger.warn('Fetching data from database as error in Redis.');
    }
  } else {
    logger.warn('Fetching data from database as Redis is not available.');
  }
  if (!caseInfo) {
    caseInfo = await Case.findByPk(caseID, {
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
    if (caseInfo && redisStatus()) {
      try {
        await redisClient.set(`caseInfo:${caseID}`, JSON.stringify(caseInfo), {
          EX: 300,
          NX: false
        });
      } catch (errorRedis) {
        logger.error('Redis error on medicines in getCaseDetail: ', errorRedis)
      }
    }
  }
  return caseInfo;
}

async function getCaseMedicinesFromRedisOrDatabase(caseID) {
  let caseMedicines;
  if (redisStatus()) {
    try {
      caseMedicines = await redisClient.get(`caseMedicines:${caseID}`);
      if (caseMedicines) {
        caseMedicines = JSON.parse(caseMedicines);
      }
    } catch (redisError) {
      logger.error('Redis error on medicines in getCaseDetail: ', redisError);
    }
  }
  if (!caseMedicines) {
    logger.warn('Fetching medicines from database as Redis is not available.');
    const rawCaseMedicines = await sequelize.query(
      'SELECT `MedicineMedicineID`, `dosage` FROM `casemedicine` WHERE `CaseCaseID` = :caseID',
      {
        replacements: { caseID: caseID },
        type: sequelize.QueryTypes.SELECT
      }
    );
    caseMedicines = rawCaseMedicines.map(cm => ({
      MedicineMedicineID: cm.MedicineMedicineID,
      dosage: cm.dosage
    }));
    if (redisStatus()) {
      try {
        await redisClient.set(`caseMedicines:${caseID}`, JSON.stringify(caseMedicines), {
          EX: 300,
          NX: true
        });
      } catch (redisError) {
        logger.error('Redis error on set medicine in getCaseDetail: ', redisError);
      }
    }
  }
  return caseMedicines;
}