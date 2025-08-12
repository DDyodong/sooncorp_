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
          조직 구성
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              구매팀
            </h3>
            <p className="text-gray-600">
              구매팀은 자재를 적시에 조달하고, 효율적인 공급업체 관리와 협력을 담당합니다.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              국내·해외 영업팀
            </h3>
            <p className="text-gray-600">
              영업팀은 국내외 시장을 모두 담당하며, 전 세계 고객에게 신속하고 맞춤형 서비스를 제공합니다.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              물류팀
            </h3>
            <p className="text-gray-600">
              물류팀은 전 세계로 제품을 정확하고 효율적으로 배송하는 역할을 수행합니다.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              품질 관리 및 보증팀
            </h3>
            <p className="text-gray-600">
              문서 검증을 포함한 철저한 품질 관리와 보증 절차를 통해 최고의 품질 기준을 유지합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Organization
