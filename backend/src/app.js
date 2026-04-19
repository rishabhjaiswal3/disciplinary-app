const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler } = require('./middleware/error.middleware');

// Import routes
const authRoutes = require('./routes/auth.routes');
const habitsRoutes = require('./routes/habits.routes');
const timeblocksRoutes = require('./routes/timeblocks.routes');
const urgeRoutes = require('./routes/urge.routes');
const setbackRoutes = require('./routes/setback.routes');
const tasksRoutes = require('./routes/tasks.routes');
const scoreRoutes = require('./routes/score.routes');
const moodRoutes = require('./routes/mood.routes');
const journalRoutes = require('./routes/journal.routes');
const worksessionRoutes = require('./routes/worksession.routes');
const streakRoutes = require('./routes/streak.routes');
const analyticsRoutes = require('./routes/analytics.routes');

const app = express();

// ========================
// Middleware
// ========================
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ========================
// Routes
// ========================
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitsRoutes);
app.use('/api/timeblocks', timeblocksRoutes);
app.use('/api/urge', urgeRoutes);
app.use('/api/setback', setbackRoutes);
app.use('/api/tasks', tasksRoutes);
app.use('/api/score', scoreRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/worksession', worksessionRoutes);
app.use('/api/streak', streakRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ========================
// Error Handler (must be last)
// ========================
app.use(errorHandler);

module.exports = app;
