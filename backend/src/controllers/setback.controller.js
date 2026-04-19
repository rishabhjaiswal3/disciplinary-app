const SetbackLog = require('../models/SetbackLog');

// GET /api/setback?date=YYYY-MM-DD
exports.getSetbacks = async (req, res, next) => {
  try {
    const logs = await SetbackLog.find({ user: req.userId, date: req.query.date });
    res.json(logs);
  } catch (error) {
    next(error);
  }
};

// POST /api/setback
exports.logSetback = async (req, res, next) => {
  try {
    const log = await SetbackLog.create({ ...req.body, user: req.userId });
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
};
