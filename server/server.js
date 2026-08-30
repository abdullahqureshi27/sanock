const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50kb' }));

app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', time: new Date() });
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/manxel';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.warn('MongoDB connection note: Database not running locally, continuing with email notifications:', err.message);
  });

app.listen(PORT, () => {
  console.log(`Backend Server running on port ${PORT}`);
});
