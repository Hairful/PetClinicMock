const Case = require('../models/Case');
const Disease = require('../models/Disease');
const Medicine = require('../models/Medicine');
const Media=require('../models/Media');
//获得病例列表
exports.getAllCases=async ()=> {
    try {
        const cases = await Case.findAll({
            attributes: ['caseID', 'summary']
        });

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
            // 如果没有找到病例，返回404状态码
            return {
                status: 1,
                message: "无对应Type"
            };
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
//获得病例详情
exports.getCaseDetails = async (caseID) => {
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
        // 如果没有找到对应的病例信息，返回状态码1和相应消息
        return {
          status: 1,
          message: "无对应caseID"
        };
      }
  
      // 如果找到了对应的病例信息，返回状态码0和成功消息，以及病例信息
      return {
         status: 0,
         message: "成功",
         data: caseInfo // 这里的"data"键包含了病例的详细信息
      };
      
    } catch (error) {
      console.error('获取病例详情时发生错误:', error);
      // 如果捕获到错误，返回状态码1和错误消息
      return {
        status: -9,
        message: "获取病例详情时发生错误"
      };
    }
  };
  
