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
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string, // Load from .env
  })

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: 35.181108, // Latitude for Busan
    lng: 129.075840, // Longitude for Busan
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
              Address: Room 203-301, 12 Sicheong-ro, Yeonje-gu, Busan, Republic of Korea
            </p>
            <p className="text-gray-600 mb-2">
              Phone: +82-10-8770-6145
            </p>
            <p className="text-gray-600 mb-2">
              Fax: +82-51-868-7280
            </p>
            <p className="text-gray-600 mb-2">
              Email: ksy8634@naver.com
            </p>
            <p className='text-gray-600 mb-2'>
              For Inquiries: soonsales@sooncorp.kr
            </p>
            
          </div>
          <div>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={18}
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
