const router = require('express').Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/tasks.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
