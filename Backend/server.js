const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './dbpasswords.env' }); // Tells Node to look at your specific file name

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/booking', require('./routes/booking'));


// Connect to your Cloud Database using the URI in your file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 Connected to MongoDB Cloud successfully!'))
  .catch(err => console.error('❌ Database connection error:', err));

// Test entry route
app.get('/', (req, res) => {
  res.send('Campus Nest Backend Engine is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🛰️ Server running seamlessly on port ${PORT}`));
