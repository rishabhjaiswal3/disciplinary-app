const router = require('express').Router();
const { getMood, logMood } = require('../controllers/mood.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getMood);
router.post('/', logMood);

module.exports = router;
