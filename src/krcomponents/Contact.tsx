import React from 'react'
import { motion } from 'framer-motion'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCE4T327OYA5aa8_UhcXlPnusl75JbXLjc', // Replace with your Google Maps API key
  })

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: 35.1796, // Latitude for Busan
    lng: 129.0756, // Longitude for Busan
  }

  return (
    <motion.section
      id="contact"
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              SOON Corporation
            </h3>
            <p className="text-gray-600 mb-2">
              Address: [Insert Address Here]
            </p>
            <p className="text-gray-600 mb-2">
              Phone: [Insert Phone Number Here]
            </p>
            <p className="text-gray-600 mb-2">
              Email: [Insert Email Address Here]
            </p>
          </div>
          <div>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <div>Loading Google Maps...</div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
