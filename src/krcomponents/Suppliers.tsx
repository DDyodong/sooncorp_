import React from 'react'
import { motion } from 'framer-motion'

function Suppliers() {
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
      className="py-16 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          variants={itemVariants}
        >
          Our Suppliers
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Supplier A
            </h3>
            <p className="text-gray-600">
              Long-term partner providing high-quality raw materials.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Supplier B
            </h3>
            <p className="text-gray-600">
              Reliable source for specialized components and materials.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Supplier C
            </h3>
            <p className="text-gray-600">
              Trusted supplier ensuring consistent product quality.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Suppliers
