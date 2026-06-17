const mongoose = require('mongoose');

const HostelSchema = new mongoose.Schema({
  manager_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HostelManager', // Establishes the 1:N dependency linking property back to its Landlord
    required: true
  },
  primary_name: {
    type: String,
    required: true,
    trim: true
  },
  target_university: {
    type: String,
    required: true, // Matches your multi-university mapping scope (e.g., "UCU")
    default: 'Uganda Christian University'
  },
  localized_zone: {
    type: String,
    required: true,
    enum: ['bugujju', 'kauga', 'kirowooza', 'main_gate'] // Enforces local Mukono spatial filters
  },
  has_shuttle_transit: {
    type: Boolean,
    required: true,
    default: false // Filters hostels providing active student coaster/van transit services
  },
  verification_status: {
    type: Boolean,
    required: true,
    default: false // The Green Badge Token controlled by your System Admin
  },
  timestamp_added: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Hostel', HostelSchema);
