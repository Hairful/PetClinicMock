const express = require('express');
const router = express.Router();

const { addDb, updateDb, deleteDb, linkProb } = require('../controllers/probDbAdminController');
const { getDbList, getDbDetail } = require('../controllers/probDbController');
const { isTokenValid, isTokenAdmin } = require('../middlewares/authMiddleware');

router.post('', isTokenValid, isTokenAdmin, addDb);
router.put('', isTokenValid, isTokenAdmin, updateDb);
router.delete('', isTokenValid, isTokenAdmin, deleteDb);
router.post('/link', isTokenValid, isTokenAdmin, linkProb);
router.get('/list', isTokenValid, isTokenAdmin, getDbList);
router.get('/detail', isTokenValid, isTokenAdmin, getDbDetail);

module.exports = router;