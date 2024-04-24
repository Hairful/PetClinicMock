const { addProbDb, updateProbDb, deleteProbDb, linkProbDbToProb } = require('../services/probDbAdminService');
exports.addDb = async (req, res) => {
    try {
        const result = await addProbDb(req);
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
exports.updateDb = async (req, res) => {
    try {
        const result = await updateProbDb(req);
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
exports.deleteDb = async (req, res) => {
    try {
        const result = await deleteProbDb(req);
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
exports.linkProb = async (req, res) => {
    try {
        const result = await linkProbDbToProb(req);
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
