const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, default: 'Untitled' },
    content: { type: String, default: '' },
    tags: [String],
    isPinned: { type: Boolean, default: false },
    isTrashed: { type: Boolean, default: false },
    lastEdited: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
