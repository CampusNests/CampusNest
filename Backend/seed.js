const mongoose = require('mongoose');
require('dotenv').config({ path: './dbpasswords.env' });

// Import the schemas needed to build mock properties
const Hostel = require('./models/hostel'); 
const RoomInventory = require('./models/RoomInventory');

const seedDatabase = async () => {
  try {
    // Connect to the cloud database
    await mongoose.connect(process.env.MONGO_URI);
    console.log('📡 Connected to Cloud for data seeding...');

    // Clean out any old test data to prevent duplicates
    await Hostel.deleteMany({});
    await RoomInventory.deleteMany({});
    console.log('🗑️ Old properties cleared.');

    // 1. Insert a Mock Hostel located in Bugujju, Mukono
    const bugujjuHostel = await Hostel.create({
      manager_id: new mongoose.Types.ObjectId(), // Simulated Manager Hex ID
      primary_name: 'Olympus Plaza Hostels',
      localized_zone: 'bugujju',
      has_shuttle_transit: true, // Includes UCU student shuttle service van
      verification_status: true  // Admin Verified Green Badge Active
    });

    // 2. Insert a Mock Hostel located in Kauga, Mukono
    const kaugaHostel = await Hostel.create({
      manager_id: new mongoose.Types.ObjectId(),
      primary_name: 'Kauga Student Heights',
      localized_zone: 'kauga',
      has_shuttle_transit: false,
      verification_status: false // Unverified Grey Pin property
    });

    console.log('🏢 Mock Hostels created successfully.');

    // 3. Allocate Tiered Room Inventories for Olympus Plaza (Bugujju)
    await RoomInventory.create([
      {
        hostel_id: bugujjuHostel._id,
        room_tier_type: 'single',
        base_rental_price: 800000, // Price in UGX per semester
        initial_total_capacity: 10,
        current_available_count: 3 // Set to 3 to test the "[3] Single Rooms Left" scenario
      },
      {
        hostel_id: bugujjuHostel._id,
        room_tier_type: 'double',
        base_rental_price: 500000,
        initial_total_capacity: 15,
        current_available_count: 12
      }
    ]);

    // 4. Allocate Tiered Room Inventories for Kauga Heights (Kauga - Double Rooms Only)
    await RoomInventory.create({
      hostel_id: kaugaHostel._id,
      room_tier_type: 'double',
      base_rental_price: 450000,
      initial_total_capacity: 20,
      current_available_count: 5
    });

    console.log('🛏️ Structural room allocation counts fully populated!');
    console.log('✅ Seeding Complete! Press Ctrl + C to exit.');
    mongoose.connection.close();

  } catch (err) {
    console.error('❌ Seeding Error:', err);
    process.exit(1);
  }
};

seedDatabase();
