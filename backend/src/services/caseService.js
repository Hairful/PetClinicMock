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
      return { status: 0, message: "成功", cases: [] };
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
    let caseInfo;
    let caseMedicines;
    if (redisStatus()) {
      try {
        // 尝试从Redis获取缓存数据
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
      // 如果Redis中没有数据或Redis操作失败，则从数据库获取
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
    if (!caseInfo) {
      return { status: 1, message: "无对应caseID" };
    }
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
      // 如果Redis操作失败，从数据库获取药品信息
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
        await redisClient.set(`caseMedicines:${caseID}`, JSON.stringify(caseMedicines), {
          EX: 300,
          NX: true
        });
      }
    }
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
      diagnose: caseInfo.diagnose,
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
      threshold: 0.7, // 门限
    };
    const fuse = new Fuse(cases, options);
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
      threshold: 0.7,
    };
    const fuse = new Fuse(cases, options);
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