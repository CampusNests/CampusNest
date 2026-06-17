const mongoose = require('mongoose');

const HostelManagerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  contact_phone: {
    type: String,
    required: true,
    unique: true
  },
  email_address: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  registered_merchant_wallet: {
    type: String,
    required: true, // Captures their explicit mobile money merchant code for direct payouts
    default: 'MOMO-MERCHANT-XYZ'
  },
  password_hash: {
    type: String,
    required: true
  },
  account_created: {
    type: Date,
    default: Date.now
  }
});

// Explicitly exports under the matching string ID and variable token name
module.exports = mongoose.model('HostelManager', HostelManagerSchema);
