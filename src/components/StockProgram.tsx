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
      initial={false}
      animate="visible"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          variants={itemVariants}
        >
          Stock Program
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Fittings</h3>
            <p className="text-gray-600">
              Elbows, Tees, Reducers, Couplings, Caps, etc. in various materials
              and sizes.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Flanges</h3>
            <p className="text-gray-600">
              Welding Neck, Slip-On, Blind, Socket Welding, Threaded, etc.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Valves</h3>
            <p className="text-gray-600">
              Gate, Globe, Check, Ball, Butterfly valves for diverse applications.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Forgings</h3>
            <p className="text-gray-600">
              Custom and standard forgings to meet specific requirements.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Pipes</h3>
            <p className="text-gray-600">
              Seamless and welded pipes in various grades and dimensions.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Specialty Items
            </h3>
            <p className="text-gray-600">
              Unique components tailored for specialized industrial needs.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default StockProgram
