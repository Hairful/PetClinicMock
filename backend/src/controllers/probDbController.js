const { getProbDbList, getProbDbDetail } = require('../services/probDbService');
exports.getDbList = async (req, res) => {
    try {
        const result = await getProbDbList();
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        res.status(500).json({ status: -9, message: '错误' });
    }
}
exports.getDbDetail = async (req, res) => {
    try {
        const { probDbID } = req.query;
        const result = await getProbDbDetail(probDbID);
        let httpStatus;
        switch (result.status) {
            case 0:
                httpStatus = 200;
                break;
            case -9:
                httpStatus = 500;
                break;
        }
        res.status(httpStatus).json(result);
    } catch (error) {
        res.status(500).json({ status: -9, message: '错误' });
    }
}