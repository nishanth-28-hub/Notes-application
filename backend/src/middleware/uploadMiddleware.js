const multer = require('multer');
const path = require('path');

// Store files in the 'uploads/' folder temporarily
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ 
    storage,
    limits: { fileSize: 5000000 }, // 5MB limit
});

module.exports = upload;
