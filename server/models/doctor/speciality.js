const mongoose = require('mongoose');

const specialtySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String }, // Optional description of the specialty
  createdAt: { type: Date, default: Date.now }
});

const Specialty = mongoose.model('Specialty', specialtySchema);
module.exports = Specialty;
