const cloudinary = require('../config/cloudinary');
const fs = require('fs');

exports.uploadMedia = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No file uploaded" });

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto", // Automatically detects if it's an image or audio
            folder: "notes_app_media"
        });

        // Delete local file from /uploads after cloud upload
        fs.unlinkSync(req.file.path);

        res.json({ url: result.secure_url, public_id: result.public_id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
