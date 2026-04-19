const WorkSession = require('../models/WorkSession');

// GET /api/worksession?date=YYYY-MM-DD
exports.getSessions = async (req, res, next) => {
  try {
    const sessions = await WorkSession.find({ user: req.userId, date: req.query.date });
    res.json(sessions);
  } catch (error) {
    next(error);
  }
};

// POST /api/worksession
exports.createSession = async (req, res, next) => {
  try {
    const session = await WorkSession.create({ ...req.body, user: req.userId });
    res.status(201).json(session);
  } catch (error) {
    next(error);
  }
};

// PUT /api/worksession/:id
exports.updateSession = async (req, res, next) => {
  try {
    const session = await WorkSession.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!session) return res.status(404).json({ message: 'Session not found' });
    res.json(session);
  } catch (error) {
    next(error);
  }
};
