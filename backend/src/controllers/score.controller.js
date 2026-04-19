const DailyScore = require('../models/DailyScore');

// GET /api/score?date=YYYY-MM-DD
exports.getScore = async (req, res, next) => {
  try {
    const score = await DailyScore.findOne({ user: req.userId, date: req.query.date });
    res.json(score || { totalPoints: 0, breakdown: {} });
  } catch (error) {
    next(error);
  }
};

// POST /api/score  (recalculate / update)
exports.updateScore = async (req, res, next) => {
  try {
    const { date, totalPoints, breakdown } = req.body;

    const score = await DailyScore.findOneAndUpdate(
      { user: req.userId, date },
      { totalPoints, breakdown },
      { upsert: true, new: true }
    );

    res.json(score);
  } catch (error) {
    next(error);
  }
};
