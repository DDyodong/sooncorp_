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
      className="bg-zinc-300 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          순코프레이션에 오신 것을 환영합니다
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          variants={itemVariants}
        >
          저희는 배관 자재 전문 제조·수출 기업으로, 전 세계 고객에게 최고의 품질과 서비스를 제공합니다.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default Hero
