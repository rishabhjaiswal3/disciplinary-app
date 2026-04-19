const router = require('express').Router();
const { getSessions, createSession, updateSession } = require('../controllers/worksession.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getSessions);
router.post('/', createSession);
router.put('/:id', updateSession);

module.exports = router;
