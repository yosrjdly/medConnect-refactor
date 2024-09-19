import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaUser } from 'react-icons/fa';

const HomePage = () => {
  const history = useNavigate();

  const handleRoleSelection = (role) => {
    // Navigate to the respective registration page
    history(`/${role}-landing-page`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-primary mb-4">Welcome to MedConnect</h1>
        <p className="text-center text-dark mb-6">
          Manage your medical records seamlessly. Whether you are a doctor or a patient, we've got you covered!
        </p>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:shadow-xl transition duration-300 flex items-center justify-center"
            onClick={() => handleRoleSelection('doctor')}
          >
            <FaUserMd className="mr-2" />
            I'm a Doctor
          </button>
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:shadow-xl transition duration-300 flex items-center justify-center"
            onClick={() => handleRoleSelection('patient')}
          >
            <FaUser className="mr-2" />
            I'm a Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
