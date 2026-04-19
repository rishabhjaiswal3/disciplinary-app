const router = require('express').Router();
const { getHabits, toggleHabit } = require('../controllers/habits.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getHabits);
router.post('/', toggleHabit);

module.exports = router;
