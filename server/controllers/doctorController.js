const Doctor = require('../models/doctor/doctor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new doctor
exports.registerDoctor = async (req, res) => {
  const { firstName, lastName, email, password, licenseNumber,phone } = req.body;

  try {
    // Check if doctor already exists
    let doctor = await Doctor.findOne({ email });
    if (doctor) {
      return res.status(400).json({ msg: 'Doctor already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new doctor
    doctor = new Doctor({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
 // Store hashed password
      licenseNumber,
    });

    // Save doctor to the database
    await doctor.save();

    // Generate JWT
    const payload = {
      doctor: { id: doctor.id }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '2h' // Token expiry time
    });

    // Send response with token
    res.status(201).json({ token ,payload});

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Doctor login
exports.loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if doctor exists
    let doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT
    const payload = {
      doctor: { id: doctor.id }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    // Send response with token
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
