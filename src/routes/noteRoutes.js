const express = require('express');
const router = express.Router();
const { getNotes, createNote, trashNote } = require('../controllers/noteController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect); // All note routes require login
router.get('/', getNotes);
router.post('/', createNote);
router.put('/trash/:id', trashNote);

module.exports = router;
