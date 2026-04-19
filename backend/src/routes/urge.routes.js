const router = require('express').Router();
const { getUrges, logUrge } = require('../controllers/urge.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getUrges);
router.post('/', logUrge);

module.exports = router;
