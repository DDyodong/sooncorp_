import React from 'react'
import { motion } from 'framer-motion'

function AfterSalesService() {
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

  return (
    <motion.section
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
          After Sales Service
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Technical Support
            </h3>
            <p className="text-gray-600">
              Our technical support team is available to assist with any
              product-related questions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Warranty Services
            </h3>
            <p className="text-gray-600">
              We offer comprehensive warranty services to ensure customer
              satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Maintenance & Repairs
            </h3>
            <p className="text-gray-600">
              We provide maintenance and repair services to keep your products
              in optimal condition.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Spare Parts
            </h3>
            <p className="text-gray-600">
              We maintain a stock of spare parts for quick and efficient
              replacements.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AfterSalesService
