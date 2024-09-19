const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // For authentication purposes
  phone: { type: String, required: true },
  dateOfBirth: { type: Date, required: true }, // Patient's date of birth
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true }, // Gender of the patient
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  medicalHistory: [{ // Array of medical history entries
    condition: { type: String }, // Medical condition
    diagnosisDate: { type: Date }, // Date of diagnosis
    treatment: { type: String }, // Treatment received
    notes: { type: String } // Additional notes
  }],
  allergies: [{ type: String }], // List of allergies
  medications: [{ // Current medications the patient is taking
    name: { type: String },
    dosage: { type: String },
    frequency: { type: String }
  }],
  emergencyContact: { // Emergency contact information
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    phone: { type: String, required: true }
  },
  insuranceDetails: { // Insurance information
    provider: { type: String },
    policyNumber: { type: String },
    groupNumber: { type: String }
  },
  visitHistory: [{ // Record of visits
    date: { type: Date, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }, // Reference to the doctor seen
    reason: { type: String }, // Reason for the visit
    notes: { type: String }, // Doctor's notes from the visit
    prescriptions: [{ // Prescriptions given during the visit
      medication: { type: String },
      dosage: { type: String },
      instructions: { type: String }
    }]
  }],
  portalAccess: { type: Boolean, default: false }, // Indicates if the patient can access the portal
  communicationPreference: { 
    type: String, 
    enum: ['Phone', 'Email', 'Text'], 
    required: true 
  },
  emergencyMedicalInfo: { 
    type: String // Critical medical information for emergencies
  },
  familyMedicalHistory: [{
    relation: { type: String }, // e.g., Mother, Father, Sibling
    condition: { type: String } // Condition present in family
  }],
  appointmentPreferences: { 
    type: String, 
    enum: ['In-person', 'Telehealth'], 
    required: true 
  },
  educationResources: [{ 
    title: { type: String },
    url: { type: String } 
  }],
  consentForms: [{
    formType: { type: String }, // e.g., "Surgery Consent", "Data Sharing Consent"
    signedDate: { type: Date },
    documentUrl: { type: String } // URL to the stored consent form
  }],
  alerts: [{
    alertType: { type: String }, // e.g., "Follow-up", "Medication Refill"
    date: { type: Date },
    notes: { type: String }
  }],
  createdAt: { type: Date, default: Date.now }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
