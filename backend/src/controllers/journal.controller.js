const JournalEntry = require('../models/JournalEntry');

// GET /api/journal?date=YYYY-MM-DD
exports.getEntries = async (req, res, next) => {
  try {
    const entries = await JournalEntry.find({ user: req.userId, date: req.query.date });
    res.json(entries);
  } catch (error) {
    next(error);
  }
};

// POST /api/journal
exports.createEntry = async (req, res, next) => {
  try {
    const entry = await JournalEntry.create({ ...req.body, user: req.userId });
    res.status(201).json(entry);
  } catch (error) {
    next(error);
  }
};

// PUT /api/journal/:id
exports.updateEntry = async (req, res, next) => {
  try {
    const entry = await JournalEntry.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/journal/:id
exports.deleteEntry = async (req, res, next) => {
  try {
    const entry = await JournalEntry.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json({ message: 'Deleted' });
  } catch (error) {
    next(error);
  }
};
