'use client';

import { useState } from 'react';
import { FaCar, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaShieldAlt, FaTools, FaCertificate, FaBars, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const cars = [
    { name: 'Honda City', year: 2020, price: '₹8,50,000', mileage: '35,000 km', fuel: 'Petrol' },
    { name: 'Maruti Swift', year: 2021, price: '₹6,75,000', mileage: '28,000 km', fuel: 'Petrol' },
    { name: 'Hyundai Creta', year: 2019, price: '₹12,50,000', mileage: '42,000 km', fuel: 'Diesel' },
    { name: 'Toyota Innova', year: 2018, price: '₹14,25,000', mileage: '55,000 km', fuel: 'Diesel' },
    { name: 'Tata Nexon', year: 2021, price: '₹9,80,000', mileage: '22,000 km', fuel: 'Petrol' },
    { name: 'Mahindra XUV500', year: 2019, price: '₹11,90,000', mileage: '48,000 km', fuel: 'Diesel' },
  ];

  const features = [
    { icon: <FaShieldAlt />, title: 'Quality Assured', description: '150+ point inspection on every vehicle' },
    { icon: <FaCertificate />, title: 'Warranty Included', description: '6-month comprehensive warranty' },
    { icon: <FaTools />, title: 'Free Service', description: 'First service absolutely free' },
    { icon: <FaCheckCircle />, title: 'Verified Papers', description: 'All documents verified and clear' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <FaCar className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Somu Cars</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#inventory" className="text-gray-700 hover:text-blue-600 transition">Inventory</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#inventory" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Inventory</a>
              <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Somu Cars</h1>
            <p className="text-xl md:text-2xl mb-8">Your Trusted Partner for Quality Second Hand Cars</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Find your dream car at unbeatable prices. Every vehicle is thoroughly inspected,
              certified, and comes with a warranty for your peace of mind.
            </p>
            <a href="#inventory" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105">
              Browse Our Inventory
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Somu Cars?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-xl transition">
                <div className="text-5xl text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <FaCar className="text-7xl text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{car.name}</h3>
                  <p className="text-gray-600 mb-4">Year: {car.year}</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{car.mileage}</span>
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-3xl text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">123 Main Street<br />City Center, State - 123456<br />India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhone className="text-3xl text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210<br />+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-3xl text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@somucars.com<br />sales@somucars.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaClock className="text-3xl text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaCar className="text-2xl" />
            <span className="text-xl font-bold">Somu Cars</span>
          </div>
          <p className="text-gray-400 mb-4">Your Trusted Partner for Quality Second Hand Cars</p>
          <p className="text-gray-500 text-sm">&copy; 2025 Somu Cars. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
