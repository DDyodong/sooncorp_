import React from 'react'
import { motion } from 'framer-motion'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // .env 에서 불러오기 (Vite)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
  })

  const mapContainerStyle: React.CSSProperties = { width: '100%', height: '400px' }

  const center = { lat: 35.181108, lng: 129.07584 } // 부산

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
          연락처
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={itemVariants}>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">순코프레이션</h3>
            <p className="text-gray-600 mb-2">
              주소: 부산광역시 연제구 시청로 12, 203-301호 (대한민국)
            </p>
            <p className="text-gray-600 mb-2">전화: +82-10-8770-6145</p>
            <p className="text-gray-600 mb-2">팩스: +82-51-868-7280</p>
            <p className="text-gray-600 mb-2">이메일: ksy8634@naver.com</p>
          </div>

          <div>
            {isLoaded ? (
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={18}>
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <div>지도를 불러오는 중…</div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
