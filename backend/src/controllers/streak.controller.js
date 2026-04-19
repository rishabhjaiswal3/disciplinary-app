const Streak = require('../models/Streak');

// GET /api/streak
exports.getStreaks = async (req, res, next) => {
  try {
    const streaks = await Streak.find({ user: req.userId });
    res.json(streaks);
  } catch (error) {
    next(error);
  }
};

// POST /api/streak
exports.updateStreak = async (req, res, next) => {
  try {
    const { type, currentStreak, longestStreak, lastActiveDate } = req.body;

    const streak = await Streak.findOneAndUpdate(
      { user: req.userId, type },
      { currentStreak, longestStreak, lastActiveDate },
      { upsert: true, new: true }
    );

    res.json(streak);
  } catch (error) {
    next(error);
  }
};
