const DailyScore = require('../models/DailyScore');
const HabitLog = require('../models/HabitLog');
const UrgeLog = require('../models/UrgeLog');

// GET /api/analytics/weekly?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
exports.getWeeklyReport = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;

    const scores = await DailyScore.find({
      user: req.userId,
      date: { $gte: startDate, $lte: endDate },
    }).sort({ date: 1 });

    res.json(scores);
  } catch (error) {
    next(error);
  }
};

// GET /api/analytics/trends?days=30
exports.getTrends = async (req, res, next) => {
  try {
    const days = parseInt(req.query.days) || 30;
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - days);

    const formatDate = (d) => d.toISOString().split('T')[0];

    const scores = await DailyScore.find({
      user: req.userId,
      date: { $gte: formatDate(startDate), $lte: formatDate(today) },
    }).sort({ date: 1 });

    res.json(scores);
  } catch (error) {
    next(error);
  }
};
