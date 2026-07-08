const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');

require('dotenv').config({ path: path.join(__dirname, 'dbpasswords.env') });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/booking', require('./routes/booking'));

const dnsResolvers = process.env.DNS_SERVERS
  ? process.env.DNS_SERVERS.split(',').map((server) => server.trim()).filter(Boolean)
  : [];
if (dnsResolvers.length > 0) {
  dns.setServers(dnsResolvers);
  console.log('Using DNS servers:', dns.getServers());
}

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ Missing MONGO_URI; set it in Backend/dbpasswords.env or your environment.');
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('🚀 Connected to MongoDB Cloud successfully!');
    app.listen(PORT, () => console.log(`🛰️ Server running seamlessly on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err);
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.send('Campus Nest Backend Engine is running!');
});
