const Note = require('../models/Note');

// Get all notes for the logged-in user
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user, isTrashed: false }).sort({ lastEdited: -1 });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new note
exports.createNote = async (req, res) => {
    try {
        const newNote = new Note({ user: req.user });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Move to Trash (Soft Delete)
exports.trashNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        note.isTrashed = true;
        await note.save();
        res.json({ message: 'Note moved to trash' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
