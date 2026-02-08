import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import CTASection from '../components/CTASection.jsx'
import StatsCounter from '../components/StatsCounter.jsx'
import Footer from '../components/Footer.jsx'
import LoginModal from '../components/LoginModal.jsx'
import { FiSearch, FiShield, FiClock, FiMapPin, FiUsers, FiCheckCircle, FiCalendar } from 'react-icons/fi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  const features = [
    {
      icon: <FiSearch />,
      title: 'Easy Discovery',
      desc: 'Find the perfect space by location, price, capacity, and amenities'
    },
    {
      icon: <FiShield />,
      title: 'Secure Booking',
      desc: 'Book with confidence with our secure payment and confirmation system'
    },
    {
      icon: <FiClock />,
      title: 'Flexible Duration',
      desc: 'Book by the hour or by the day - choose what works best for you'
    }
  ]

  const spaceTypes = [
    'Coworking Spaces','Private Offices','Meeting Rooms','Conference Centers','Creative Studios','Commercial Kitchens'
  ]

  const handleGetStarted = () => {
    setShowLoginModal(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLoginClick={handleGetStarted} />
      <main className="flex-1">
        <section id="home">
          <Hero onGetStartedClick={handleGetStarted} />
        </section>

        <section id="features" className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Spacer?</h2>
            <p className="text-lg text-gray-600">Trusted by businesses and individuals across Kenya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </section>

        <section id="spaces" className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Browse by Space Type</h3>
              <p className="text-lg text-gray-600">Discover the perfect space for your needs</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {spaceTypes.map((s) => (
                <div key={s} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center font-medium text-gray-700 hover:text-indigo-600 cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h3>
            <p className="text-lg text-gray-600">Book your perfect workspace in four simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiSearch className="text-3xl text-indigo-600" />
                </div>
                <div className="text-2xl font-bold text-indigo-600 mb-2">1</div>
                <div className="font-bold text-lg mb-2 text-gray-900">Search</div>
                <p className="text-gray-600">Browse spaces by location, type, and price</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="text-3xl text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-2">2</div>
                <div className="font-bold text-lg mb-2 text-gray-900">Select</div>
                <p className="text-gray-600">Choose the perfect space for your needs</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCalendar className="text-3xl text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">3</div>
                <div className="font-bold text-lg mb-2 text-gray-900">Book</div>
                <p className="text-gray-600">Secure your booking with instant confirmation</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUsers className="text-3xl text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
                <div className="font-bold text-lg mb-2 text-gray-900">Enjoy</div>
                <p className="text-gray-600">Show up and make great things happen</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Impact</h3>
              <p className="text-lg text-indigo-100">Join thousands of satisfied customers</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-xl text-indigo-100">Spaces Listed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">10,000+</div>
                <div className="text-xl text-indigo-100">Bookings Made</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">5,000+</div>
                <div className="text-xl text-indigo-100">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        <CTASection onGetStartedClick={handleGetStarted} />
      </main>

      <Footer />
      
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
