const mongoose = require('mongoose');

const RoomInventorySchema = new mongoose.Schema({
  hostel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel', // Binds this specific room tier directly to its parent property record
    required: true
  },
  room_tier_type: {
    type: String,
    required: true,
    enum: ['single', 'double', 'shared'] // Differentiates your tiered structural configurations
  },
  base_rental_price: {
    type: Number,
    required: true // Semester rental price value configuration
  },
  initial_total_capacity: {
    type: Number,
    required: true // Baseline baseline count parameter
  },
  current_available_count: {
    type: Number,
    required: true // The active ticker counter targeted by the automated -1 booking mutation logic
  },
  occupancy_state: {
    type: String,
    required: true,
    enum: ['vacant', 'flagged_as_booked'],
    default: 'vacant'
  }
});

module.exports = mongoose.model('RoomInventory', RoomInventorySchema);
