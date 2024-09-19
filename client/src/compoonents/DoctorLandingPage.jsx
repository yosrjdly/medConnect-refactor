import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaCalendarAlt, FaHospital } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS

const DoctorLandingPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f7f8f9]"> {/* Unified background color */}
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-[#1abaa9] text-white overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-4 py-16 container mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Medical Practice</h1>
            <p className="text-lg md:text-xl mb-8">MedConnect offers cutting-edge tools to streamline patient management and enhance your practice.</p>
            <Link to="/doctor-registration">
              <button className="bg-white text-[#1abaa9] px-8 py-4 rounded-lg shadow-lg hover:bg-[#e0e0e0] transition duration-300">
                Join Us Now
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src="https://imgproxy.epicpxls.com/Ku0t_wSM9o2LaEc5zUaf1cUID9DHHJSgCU-Qz8B7ts4/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by84ODhmOTJk/NTFlM2QyOTA5Njlk/ZDZkODYxNjEzNjU5/Mg.jpg" alt="Hero" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 w-full bg-[#d0d9df]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#353244] mb-8">Explore Our Features</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105 hover:shadow-xl">
              <FaStethoscope className="text-[#1abaa9] text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-[#353244] mb-2">Comprehensive Patient Management</h3>
                <p className="text-[#000000]">Seamlessly manage patient records, history, and appointments with our intuitive interface.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105 hover:shadow-xl">
              <FaCalendarAlt className="text-[#1abaa9] text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-[#353244] mb-2">Efficient Scheduling</h3>
                <p className="text-[#000000]">Effortlessly schedule appointments and manage your calendar with ease.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105 hover:shadow-xl">
              <FaHospital className="text-[#1abaa9] text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-[#353244] mb-2">Hospital Integration</h3>
                <p className="text-[#000000]">Integrate seamlessly with hospitals and clinics for efficient communication and data management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#353244] mb-6">What Our Users Say</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="bg-white text-[#353244] p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"MedConnect transformed my practice. The features are intuitive and extremely useful."</p>
              <footer className="mt-4">- Dr. Sarah Lee</footer>
            </div>
            <div className="bg-white text-[#353244] p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"A must-have tool for modern medical practices. Highly recommended!"</p>
              <footer className="mt-4">- Dr. John Smith</footer>
            </div>
            {/* Add more testimonials */}
          </Carousel>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 w-full bg-[#acb9c5]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#353244] mb-8">Why MedConnect?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-white p-6 rounded-full shadow-lg flex flex-col items-center">
              <FaStethoscope className="text-[#1abaa9] text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-[#353244] mb-2">Streamlined Workflow</h3>
              <p className="text-[#000000]">Optimize your workflow with integrated tools for patient management.</p>
            </div>
            <div className="bg-white p-6 rounded-full shadow-lg flex flex-col items-center">
              <FaCalendarAlt className="text-[#1abaa9] text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-[#353244] mb-2">Advanced Tools</h3>
              <p className="text-[#000000]">Access a suite of advanced medical tools and resources.</p>
            </div>
            <div className="bg-white p-6 rounded-full shadow-lg flex flex-col items-center">
              <FaHospital className="text-[#1abaa9] text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-[#353244] mb-2">Secure and Reliable</h3>
              <p className="text-[#000000]">Ensure your patient data is secure and accessible at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#353244] mb-6">Get in Touch with Us</h2>
          <p className="text-lg mb-8">Have questions or need more information? Contact us and we’ll assist you.</p>
          <div className="relative w-full max-w-md mx-auto">
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#353244] text-lg font-semibold mb-2">Name</label>
                <input type="text" id="name" className="w-full border border-[#d0d9df] p-4 rounded-lg focus:outline-none focus:border-[#1abaa9]" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#353244] text-lg font-semibold mb-2">Email</label>
                <input type="email" id="email" className="w-full border border-[#d0d9df] p-4 rounded-lg focus:outline-none focus:border-[#1abaa9]" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#353244] text-lg font-semibold mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full border border-[#d0d9df] p-4 rounded-lg focus:outline-none focus:border-[#1abaa9]"></textarea>
              </div>
              <button type="submit" className="bg-[#1abaa9] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#0e8c8b] transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorLandingPage;
