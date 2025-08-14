import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
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

  const year = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-gray-800 py-8 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 text-center space-y-2">
        <motion.p variants={itemVariants}>
          &copy; {year} 순코프레이션.  All rights.
        </motion.p>
        <motion.p variants={itemVariants} className="text-gray-300">
          사업자등록번호: 737-03-01553&nbsp;|&nbsp;대표자: 권순영
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default Footer
