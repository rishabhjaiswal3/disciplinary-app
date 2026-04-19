const mongoose = require('mongoose');

const setbackLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trigger: { type: String, default: '' },
    notes: { type: String, default: '' },
    date: { type: String, required: true }, // "YYYY-MM-DD"
  },
  { timestamps: true }
);

module.exports = mongoose.model('SetbackLog', setbackLogSchema);
