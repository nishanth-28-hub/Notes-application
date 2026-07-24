const Note = require('../models/Note');

// Get all notes for the logged-in user
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user, isTrashed: false }).sort({ isPinned: -1, lastEdited: -1 });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new note
exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body || {};
        const newNote = new Note({ 
            user: req.user,
            title: title || 'Untitled',
            content: content || ''
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a note (title, content, tags)
exports.updateNote = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const note = await Note.findOne({ _id: req.params.id, user: req.user });
        if (!note) return res.status(404).json({ message: 'Note not found' });

        if (title !== undefined) note.title = title;
        if (content !== undefined) note.content = content;
        if (tags !== undefined) note.tags = tags;
        note.lastEdited = Date.now();

        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Toggle pin on a note
exports.togglePin = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, user: req.user });
        if (!note) return res.status(404).json({ message: 'Note not found' });

        note.isPinned = !note.isPinned;
        note.lastEdited = Date.now();
        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Move to Trash (Soft Delete)
exports.trashNote = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, user: req.user });
        if (!note) return res.status(404).json({ message: 'Note not found' });

        note.isTrashed = true;
        note.lastEdited = Date.now();
        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
