const router = require('express').Router();
const { getWeeklyReport, getTrends } = require('../controllers/analytics.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/weekly', getWeeklyReport);
router.get('/trends', getTrends);

module.exports = router;
