const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');
require('dotenv').config({ path: './dbpasswords.env' }); // Tells Node to look at your specific file name

// Use explicit DNS servers when local resolver lookup fails for MongoDB Atlas.
// You can override this by setting DNS_SERVERS in dbpasswords.env as a comma-separated list.
const dnsResolvers = process.env.DNS_SERVERS
  ? process.env.DNS_SERVERS.split(',').map((server) => server.trim()).filter(Boolean)
  : ['2001:43ff::146'];
if (dnsResolvers.length > 0) {
  dns.setServers(dnsResolvers);
  console.log('Using DNS servers:', dns.getServers());
}

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
