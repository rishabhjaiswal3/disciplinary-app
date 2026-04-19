const router = require('express').Router();
const { getStreaks, updateStreak } = require('../controllers/streak.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getStreaks);
router.post('/', updateStreak);

module.exports = router;
