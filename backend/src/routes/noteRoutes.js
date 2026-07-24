const express = require('express');
const router = express.Router();
const { getNotes, createNote, updateNote, togglePin, trashNote } = require('../controllers/noteController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect); // All note routes require login

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.patch('/:id/pin', togglePin);
router.delete('/:id', trashNote);

module.exports = router;
