const HabitLog = require('../models/HabitLog');

// GET /api/habits?date=YYYY-MM-DD
exports.getHabits = async (req, res, next) => {
  try {
    const { date } = req.query;
    const logs = await HabitLog.find({ user: req.userId, date });
    res.json(logs);
  } catch (error) {
    next(error);
  }
};

// POST /api/habits
exports.toggleHabit = async (req, res, next) => {
  try {
    const { habitKey, date, completed } = req.body;

    const log = await HabitLog.findOneAndUpdate(
      { user: req.userId, habitKey, date },
      { completed },
      { upsert: true, new: true }
    );

    res.json(log);
  } catch (error) {
    next(error);
  }
};
