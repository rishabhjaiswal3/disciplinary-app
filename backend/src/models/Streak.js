const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },           // e.g. "nofap", "habits", "overall"
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    lastActiveDate: { type: String, default: '' },    // "YYYY-MM-DD"
  },
  { timestamps: true }
);

streakSchema.index({ user: 1, type: 1 }, { unique: true });

module.exports = mongoose.model('Streak', streakSchema);
