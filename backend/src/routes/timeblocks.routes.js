const router = require('express').Router();
const { getBlocks, createBlock, updateBlock, deleteBlock } = require('../controllers/timeblocks.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.get('/', getBlocks);
router.post('/', createBlock);
router.put('/:id', updateBlock);
router.delete('/:id', deleteBlock);

module.exports = router;
