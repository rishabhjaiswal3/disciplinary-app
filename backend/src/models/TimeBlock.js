const mongoose = require('mongoose');

const timeBlockSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    startTime: { type: String, required: true },   // "HH:mm"
    endTime: { type: String, required: true },      // "HH:mm"
    category: { type: String, default: 'general' }, // e.g. "work", "health", "learning"
    date: { type: String, required: true },          // "YYYY-MM-DD"
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TimeBlock', timeBlockSchema);
