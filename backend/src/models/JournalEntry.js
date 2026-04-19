const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, default: '' },
    body: { type: String, required: true },
    tags: [{ type: String }],
    date: { type: String, required: true }, // "YYYY-MM-DD"
  },
  { timestamps: true }
);

module.exports = mongoose.model('JournalEntry', journalEntrySchema);
