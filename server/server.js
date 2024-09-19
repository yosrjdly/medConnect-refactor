const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const doctorRoute=require("./routes/doctorRoutes")

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Log HTTP requests in the console

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(`DB Connection Error: ${err}`));

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to MedConnect API');
});

//doctor route 
app.use('/api/doctor',doctorRoute )













// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Port and Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
