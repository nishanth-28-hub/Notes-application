const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // Lets server read JSON
app.use(cors());         // Lets Frontend talk to Backend

// Routes (Placeholders)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));

// Connect to Database
const connectDB = async () => {
  try {
    if (process.env.MONGO_URI && !process.env.MONGO_URI.includes('<username>')) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('✅ MongoDB Connected (External)');
    } else {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      await mongoose.connect(mongoServer.getUri());
      console.log('✅ MongoDB Connected (In-Memory Local Server for Dev)');
    }
  } catch (err) {
    console.log('❌ DB Error:', err);
  }
};
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
