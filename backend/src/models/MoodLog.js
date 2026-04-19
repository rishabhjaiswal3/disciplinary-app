const mongoose = require('mongoose');

const moodLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mood: { type: Number, min: 1, max: 5, required: true }, // 1 = terrible, 5 = great
    energy: { type: Number, min: 1, max: 5, default: 3 },
    note: { type: String, default: '' },
    date: { type: String, required: true }, // "YYYY-MM-DD"
  },
  { timestamps: true }
);

module.exports = mongoose.model('MoodLog', moodLogSchema);
