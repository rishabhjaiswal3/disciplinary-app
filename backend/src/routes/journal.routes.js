const router = require('express').Router();
const { getEntries, createEntry, updateEntry, deleteEntry } = require('../controllers/journal.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getEntries);
router.post('/', createEntry);
router.put('/:id', updateEntry);
router.delete('/:id', deleteEntry);

module.exports = router;
