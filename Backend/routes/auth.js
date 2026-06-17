const express = require('express');
const router = express.Router();

// Imports your clean, uniformly spelled backend models
const Student = require('../models/student');
const HostelManager = require('../models/HostelManager'); 
const SystemAdmin = require('../models/SystemAdmin');

// @route   POST api/auth/login
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // 1. System Administrator Path
    if (role === 'admin') {
      const admin = await SystemAdmin.findOne({ email_address: email });
      if (!admin) return res.status(400).json({ msg: 'Invalid Administrative Credentials' });
      if (password !== admin.password_hash) return res.status(400).json({ msg: 'Invalid Administrative Credentials' });
      
      return res.json({
        msg: 'Welcome to Admin Oversight Console',
        role: 'admin',
        user: { id: admin._id, first_name: admin.first_name, last_name: admin.last_name }
      });
    }

    // 2. Hostel Manager Path
    if (role === 'manager') {
      const manager = await HostelManager.findOne({ email_address: email });
      if (!manager) return res.status(400).json({ msg: 'Invalid Property Manager Credentials' });
      if (password !== manager.password_hash) return res.status(400).json({ msg: 'Invalid Property Manager Credentials' });

      return res.json({
        msg: 'Welcome to Manager Workspace Control Dashboard',
        role: 'manager',
        user: { id: manager._id, first_name: manager.first_name, last_name: manager.last_name }
      });
    }

    // 3. Standard Student Path
    if (role === 'student') {
      const student = await Student.findOne({ email_address: email });
      if (!student) return res.status(400).json({ msg: 'Invalid Student Credentials' });
      if (password !== student.password_hash) return res.status(400).json({ msg: 'Invalid Student Credentials' });

      return res.json({
        msg: 'Authentication Successful',
        role: 'student',
        user: { id: student._id, first_name: student.first_name, last_name: student.last_name }
      });
    }

    return res.status(400).json({ msg: 'Invalid Role Type Parameter Specified' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error during authorization routing processing loop');
  }
});

module.exports = router;
