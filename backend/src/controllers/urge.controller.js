const UrgeLog = require('../models/UrgeLog');

// GET /api/urge?date=YYYY-MM-DD
exports.getUrges = async (req, res, next) => {
  try {
    const logs = await UrgeLog.find({ user: req.userId, date: req.query.date });
    res.json(logs);
  } catch (error) {
    next(error);
  }
};

// POST /api/urge
exports.logUrge = async (req, res, next) => {
  try {
    const log = await UrgeLog.create({ ...req.body, user: req.userId });
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
};
