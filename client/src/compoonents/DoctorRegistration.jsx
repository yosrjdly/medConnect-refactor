import React, { useState } from 'react';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialty: '',
    licenseNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Doctor Registration Data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7f8f9] px-4">
      <div className="w-full max-w-md bg-white p-6 md:px-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#353244] text-center mb-6">Doctor Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#353244] font-semibold">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 border border-[#d0d9df] rounded-lg focus:outline-none focus:border-[#1abaa9]" 
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#353244] font-semibold">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border border-[#d0d9df] rounded-lg focus:outline-none focus:border-[#1abaa9]" 
              required 
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#353244] font-semibold">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="w-full p-3 border border-[#d0d9df] rounded-lg focus:outline-none focus:border-[#1abaa9]" 
              required 
            />
          </div>

          <div>
            <label htmlFor="specialty" className="block text-[#353244] font-semibold">Specialty</label>
            <input 
              type="text" 
              id="specialty" 
              name="specialty" 
              value={formData.specialty} 
              onChange={handleChange} 
              className="w-full p-3 border border-[#d0d9df] rounded-lg focus:outline-none focus:border-[#1abaa9]" 
              required 
            />
          </div>

          <div>
            <label htmlFor="licenseNumber" className="block text-[#353244] font-semibold">Medical License Number</label>
            <input 
              type="text" 
              id="licenseNumber" 
              name="licenseNumber" 
              value={formData.licenseNumber} 
              onChange={handleChange} 
              className="w-full p-3 border border-[#d0d9df] rounded-lg focus:outline-none focus:border-[#1abaa9]" 
              required 
            />
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full bg-[#1abaa9] text-white py-3 rounded-lg shadow-md hover:bg-[#0e8c8b] transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;
