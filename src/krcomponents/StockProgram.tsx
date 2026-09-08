import { motion } from 'framer-motion'

function StockProgram() {
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
          재고 프로그램
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">피팅류</h3>
            <p className="text-gray-600">
              엘보, 티, 리듀서, 커플링, 캡 등 다양한 재질과 규격 보유.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">플랜지</h3>
            <p className="text-gray-600">
              용접식 넥, 슬립온, 블라인드, 소켓 용접, 나사식 등.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">밸브</h3>
            <p className="text-gray-600">
              게이트, 글로브, 체크, 볼, 버터플라이 밸브 등 다양한 용도에 적용.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">단조품</h3>
            <p className="text-gray-600">
              고객 요구사항에 맞춘 맞춤형 및 표준 단조품 제공.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">파이프</h3>
            <p className="text-gray-600">
              다양한 강종과 규격의 이음매 없는 파이프 및 용접 파이프.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              특수 품목
            </h3>
            <p className="text-gray-600">
              산업별 특수 요구사항에 맞춘 맞춤형 부품 제공.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default StockProgram
