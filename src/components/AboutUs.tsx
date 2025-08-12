import React from 'react'
import { motion } from 'framer-motion'

function AboutUs() {
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
    exit: { opacity: 0 },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="about"
      className="py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container mx-auto px-6 flex items-center justify-center flex-col md:flex-row">
        <motion.div className="md:w-1/2" variants={itemVariants}>
          <img
            src="/img/Logomain.png" 
            alt="logo"
            className="w-full rounded-lg"
          />
        </motion.div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            About SOON Corporation
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            SOON Corporation was established in Busan, Korea in 2020 as a
            manufacturer and exporter specialized in piping components.
          </motion.p>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            Equipped with state-of-the-art facilities and a skilled workforce, we deliver top-quality products and services to customers worldwide.
          </motion.p>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            Our product range includes various fittings, flanges, valves, forgings, pipes, and protective coatings used in onshore, offshore, plant, construction, shipbuilding, and transportation industries.
          </motion.p>
          <motion.p
            className='text-gray-600 mb-4'
            variants={itemVariants}
          >
            Guided by the philosophy that "nothing can be achieved without passion," we strive for top quality, reasonable pricing, and timely delivery.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
             We are grateful for the ongoing support and cooperation of our valued customers and global partners, and we look forward to continuing strong relationships built on trust and commitment.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutUs
