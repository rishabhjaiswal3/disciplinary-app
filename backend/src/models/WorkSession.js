const mongoose = require('mongoose');

const workSessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    duration: { type: Number, required: true },       // minutes
    type: { type: String, enum: ['pomodoro', 'deep_work', 'custom'], default: 'pomodoro' },
    label: { type: String, default: '' },              // What they worked on
    completed: { type: Boolean, default: false },
    date: { type: String, required: true },            // "YYYY-MM-DD"
  },
  { timestamps: true }
);

module.exports = mongoose.model('WorkSession', workSessionSchema);
