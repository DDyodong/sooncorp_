import React from 'react'
import { motion } from 'framer-motion'

function Organization() {
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
          Organization
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Manufacturing
            </h3>
            <p className="text-gray-600">
              Our manufacturing team ensures precision and quality in every
              product.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Quality Control
            </h3>
            <p className="text-gray-600">
              We adhere to strict quality control standards to deliver reliable
              products.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Sales & Marketing
            </h3>
            <p className="text-gray-600">
              Our sales team is dedicated to providing excellent customer
              service and support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Research & Development
            </h3>
            <p className="text-gray-600">
              We continuously innovate to improve our products and processes.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Organization
