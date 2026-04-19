const RelapseLog = require('../models/RelapseLog');

// GET /api/relapse?date=YYYY-MM-DD
exports.getRelapses = async (req, res, next) => {
  try {
    const logs = await RelapseLog.find({ user: req.userId, date: req.query.date });
    res.json(logs);
  } catch (error) {
    next(error);
  }
};

// POST /api/relapse
exports.logRelapse = async (req, res, next) => {
  try {
    const log = await RelapseLog.create({ ...req.body, user: req.userId });
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
};
