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
      className="bg-zinc-300 py-20" // tailwind css의 클래스를 가져온 것이니 잘 모르겠으면 tailwind의 클래스 사용법을 다시 숙지합시다. tailwind의 기본 사용법은 전부 소문자로 쓰는겁니다.
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Welcome to SOON Corporation
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          variants={itemVariants}
        >
          We are a manufacturer and exporter specialized in piping components,
          providing the best quality products and services to customers worldwide.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default Hero
