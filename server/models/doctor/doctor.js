const mongoose = require('mongoose');
const Specialty = require('./speciality');

const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  licenseNumber: { type: String, required: true, unique: true },
  hospitalAffiliation: { type: String }, // Optional
  specialties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' }],
  profilePicture: { type: String }, // URL of the profile picture
  biography: { type: String }, // Doctor's biography
  qualifications: [{ type: String }], // List of qualifications
  yearsOfExperience: { type: Number }, // Years of experience
  languagesSpoken: [{ type: String }], // Languages the doctor speaks
  ratings: [{ type: Number }], // Ratings from patients
  availability: { type: Object }, // Availability schedule
  contactMethod: { type: String }, // Preferred contact method
  socialMedia: {
    linkedin: { type: String },
    twitter: { type: String }
  }, // Social media links
  insuranceAccepted: [{ type: String }], // Accepted insurance plans
  createdAt: { type: Date, default: Date.now }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
