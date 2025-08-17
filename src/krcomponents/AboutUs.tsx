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
            순코프레이션 소개
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            순코프레이션은 2020년 대한민국 부산에서 설립된 배관 자재 전문 제조·수출 기업입니다.
          </motion.p>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            최신 설비와 숙련된 인력을 바탕으로 전 세계 고객에게 최고 품질의 제품과 서비스를 제공합니다.
          </motion.p>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            주요 제품은 온쇼어, 오프쇼어, 플랜트, 건설, 조선, 운송 산업에서 사용되는 다양한 피팅, 플랜지, 밸브, 단조품, 파이프, 보호 코팅 등을 포함합니다.
          </motion.p>
          <motion.p
            className='text-gray-600 mb-4'
            variants={itemVariants}
          >
            "열정 없이는 어떤 것도 이룰 수 없다"는 철학 아래, 최고의 품질, 합리적인 가격, 신속한 납기를 위해 최선을 다하고 있습니다.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            저희는 소중한 고객과 글로벌 파트너들의 지속적인 성원과 협력에 깊이 감사드리며, 신뢰와 약속을 바탕으로 한 굳건한 관계를 이어가겠습니다.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutUs
