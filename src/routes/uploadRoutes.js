const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { uploadMedia } = require('../controllers/mediaController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, upload.single('media'), uploadMedia);

module.exports = router;
