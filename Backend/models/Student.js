const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
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
    unique: true // Normalization block preventing duplicate accounts
  },
  email_address: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  target_university: {
    type: String,
    required: true, // Links the student to their campus area (e.g., "UCU")
    trim: true
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

module.exports = mongoose.model('Student', StudentSchema);

