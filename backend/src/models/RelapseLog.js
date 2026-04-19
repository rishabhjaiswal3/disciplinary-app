const mongoose = require('mongoose');

const relapseLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trigger: { type: String, default: '' },
    notes: { type: String, default: '' },
    date: { type: String, required: true }, // "YYYY-MM-DD"
  },
  { timestamps: true }
);

module.exports = mongoose.model('RelapseLog', relapseLogSchema);
