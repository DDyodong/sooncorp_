import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="bg-gray-100 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Welcome to SoonCorporation
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          variants={itemVariants}
        >
          저희는 배관 부품을 전문으로 하는 제조 및 수출 업체로, 전 세계 고객에게 최고의 품질의 제품과 서비스를 제공합니다.
        </motion.p>
        
      </div>
    </motion.section>
  )
}

export default Hero
