const mongoose = require('mongoose');

const habitLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    habitKey: { type: String, required: true },     // e.g. "cold_shower", "no_social_media"
    date: { type: String, required: true },          // "YYYY-MM-DD"
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// One log per habit per day per user
habitLogSchema.index({ user: 1, habitKey: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('HabitLog', habitLogSchema);
