const MoodLog = require('../models/MoodLog');

// GET /api/mood?date=YYYY-MM-DD
exports.getMood = async (req, res, next) => {
  try {
    const logs = await MoodLog.find({ user: req.userId, date: req.query.date });
    res.json(logs);
  } catch (error) {
    next(error);
  }
};

// POST /api/mood
exports.logMood = async (req, res, next) => {
  try {
    const log = await MoodLog.create({ ...req.body, user: req.userId });
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
};
