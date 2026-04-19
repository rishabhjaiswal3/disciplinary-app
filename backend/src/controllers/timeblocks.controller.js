const TimeBlock = require('../models/TimeBlock');

// GET /api/timeblocks?date=YYYY-MM-DD
exports.getBlocks = async (req, res, next) => {
  try {
    const blocks = await TimeBlock.find({ user: req.userId, date: req.query.date });
    res.json(blocks);
  } catch (error) {
    next(error);
  }
};

// POST /api/timeblocks
exports.createBlock = async (req, res, next) => {
  try {
    const block = await TimeBlock.create({ ...req.body, user: req.userId });
    res.status(201).json(block);
  } catch (error) {
    next(error);
  }
};

// PUT /api/timeblocks/:id
exports.updateBlock = async (req, res, next) => {
  try {
    const block = await TimeBlock.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!block) return res.status(404).json({ message: 'Block not found' });
    res.json(block);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/timeblocks/:id
exports.deleteBlock = async (req, res, next) => {
  try {
    const block = await TimeBlock.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!block) return res.status(404).json({ message: 'Block not found' });
    res.json({ message: 'Deleted' });
  } catch (error) {
    next(error);
  }
};
