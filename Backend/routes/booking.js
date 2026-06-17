const express = require('express');
const router = express.Router();

// Imports your clean Room Inventory schema
const RoomInventory = require('../models/RoomInventory');

// @route   POST api/booking/reserve
// @desc    Validate room stock, process direct mobile money payout simulation, run targeted -1 calculation rule
// @access  Public (Triggered when student clicks Instant Book)
router.post('/reserve', async (req, res) => {
  const { studentId, roomInventoryId, networkCarrier } = req.body;

  try {
    // 1. Query the target room tier resource from the inventory collection
    const targetRoom = await RoomInventory.findById(roomInventoryId);
    if (!targetRoom) {
      return res.status(404).json({ success: false, msg: 'Structural Allocation Unit Not Found' });
    }

    // 2. Capacity Check Matrix: Ensure available counter string is greater than 0
    if (targetRoom.current_available_count <= 0) {
      return res.status(400).json({ 
        success: false, 
        msg: `All ${targetRoom.room_tier_type} rooms are fully occupied inside this property.` 
      });
    }

    // 3. Payout Simulation Log: Mimics direct MTN / Airtel network carrier API transactions
    console.log(`📡 Initializing STK Push API payload route via: ${networkCarrier}`);
    console.log(`💳 Booking deposit fee successfully transferred directly to the Hostel Manager wallet ledger.`);

    // 4. Mathematical Mutation Block: Execute inline targeted backend calculation (Count - 1)
    targetRoom.current_available_count = targetRoom.current_available_count - 1;

    // 5. State Flag Update Rule: If stock drops to absolute zero, mutate state flag value
    if (targetRoom.current_available_count === 0) {
      targetRoom.occupancy_state = 'flagged_as_booked';
    }

    // Commit change operations directly back to your cloud database collection document
    await targetRoom.save();

    // 6. Broadcast Response Payloads: Update global UI states and return success messaging
    return res.json({
      success: true,
      msg: 'Payment Confirmed',
      confirmationBadge: 'Secured',
      remainingStock: targetRoom.current_available_count,
      selectedTierType: targetRoom.room_tier_type,
      managerSyncNotification: `Live Booking Reflection Card sent to Manager. Room number reduced by -1`
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error during booking transactional processing execution loop');
  }
});

module.exports = router;
