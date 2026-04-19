const router = require('express').Router();
const { getSetbacks, logSetback } = require('../controllers/setback.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getSetbacks);
router.post('/', logSetback);

module.exports = router;
