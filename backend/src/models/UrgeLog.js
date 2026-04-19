const mongoose = require('mongoose');

const urgeLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trigger: { type: String, required: true },       // What triggered the urge
    intensity: { type: Number, min: 1, max: 10, required: true },
    resisted: { type: Boolean, default: true },
    delayUsed: { type: Boolean, default: false },     // Did user use the delay timer?
    copingStrategy: { type: String, default: '' },    // What they did instead
    date: { type: String, required: true },           // "YYYY-MM-DD"
  },
  { timestamps: true }
);

module.exports = mongoose.model('UrgeLog', urgeLogSchema);
