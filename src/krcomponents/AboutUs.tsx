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
            src="https://images.pexels.com/photos/990424/pexels-photo-990424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Manufacturing Facility"
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Soon Corporation
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            순코퍼레이션은 2020년 대한민국 부산에서 배관 부품을 전문으로 하는 제조 및 수출 업체로 설립되었습니다.
          </motion.p>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            최신 설비를 갖추고 우수한 인력을 보유한 순코퍼레이션은 전 세계 고객에게 최고의 품질의 제품과 서비스를 제공합니다.
          </motion.p>
          <motion.p
            className="text-gray-600 mb-4"
            variants={itemVariants}
          >
            저희 제품은 육상·해상·플랜트·건설·조선·운송 분야에 사용되는 다양한 피팅, 플랜지, 밸브, 단조품 및 파이프를 포함하고 있습니다.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            “열정 없이 이룰 수 있는 것은 없다”라는 경영 철학 아래, 저희는 최고의 품질, 합리적인 가격, 적절한 납기를 추구합니다.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutUs
