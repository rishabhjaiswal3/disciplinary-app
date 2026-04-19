const router = require('express').Router();
const { getRelapses, logRelapse } = require('../controllers/relapse.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getRelapses);
router.post('/', logRelapse);

module.exports = router;
