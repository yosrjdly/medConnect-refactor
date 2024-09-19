const express = require('express');
const router = express.Router();
const { registerDoctor, loginDoctor } = require('../controllers/doctorController');

// @route   POST /api/doctor/register
// @desc    Register a new doctor
router.post('/register', registerDoctor);

// @route   POST /api/doctor/login
// @desc    Authenticate doctor & get token
router.post('/login', loginDoctor);

module.exports = router;
