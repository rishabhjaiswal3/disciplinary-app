const router = require('express').Router();
const { getScore, updateScore } = require('../controllers/score.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getScore);
router.post('/', updateScore);

module.exports = router;
