const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
  admin_username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email_address: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  clearance_level_token: {
    type: String,
    required: true,
    default: 'SUPER_ADMIN_MASTER_OVERRIDE' // Enforces ultimate system control tokens
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

module.exports = mongoose.model('SystemAdmin', AdminSchema);

