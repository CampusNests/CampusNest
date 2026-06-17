const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Binds this record directly to your master Admin entity
    required: true
  },
  operational_action: {
    type: String,
    required: true,
    enum: ['PROFILE_OVERRIDE', 'REVOKE_VERIFICATION_TOKEN', 'FLAG_RECONCILIATION', 'MANUAL_COUNT_ADJUSTMENT']
  },
  targeted_entity_id: {
    type: String, // Tracks the unique Hex string ID of the altered Hostel or Room record
    required: true
  },
  action_description: {
    type: String,
    required: true // Text box logging why the admin executed the override
  },
  timestamp_logged: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AuditLog', AuditLogSchema);
