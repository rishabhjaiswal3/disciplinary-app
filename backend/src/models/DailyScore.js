const mongoose = require('mongoose');

const dailyScoreSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: String, required: true },     // "YYYY-MM-DD"
    totalPoints: { type: Number, default: 0 },
    breakdown: {
      habits: { type: Number, default: 0 },
      timeBlocks: { type: Number, default: 0 },
      urgesResisted: { type: Number, default: 0 },
      tasks: { type: Number, default: 0 },
      journal: { type: Number, default: 0 },
      workSessions: { type: Number, default: 0 },
      mood: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

dailyScoreSchema.index({ user: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('DailyScore', dailyScoreSchema);
