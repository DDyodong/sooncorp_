import React from 'react'
import { motion } from 'framer-motion'

function ExperienceList() {
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
          경험 및 이력
        </motion.h2>
        <motion.ul
          className="list-disc list-inside text-gray-600"
          variants={itemVariants}
        >
          <motion.li variants={itemVariants}>
            Extensive experience in piping component manufacturing since 2020.
          </motion.li>
          <motion.li variants={itemVariants}>
            Proven track record of delivering high-quality products to global
            markets.
          </motion.li>
          <motion.li variants={itemVariants}>
            Strong relationships with clients in on-shore, off-shore, and
            construction industries.
          </motion.li>
          <motion.li variants={itemVariants}>
            Expertise in handling diverse projects with varying specifications.
          </motion.li>
          <motion.li variants={itemVariants}>
            Commitment to continuous improvement and customer satisfaction.
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default ExperienceList
