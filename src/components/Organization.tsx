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
          Organization
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Procurement
            </h3>
            <p className="text-gray-600">
              Our procurement team ensures timely sourcing of materials and efficient supplier coordination.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Domestic & International Sales
            </h3>
            <p className="text-gray-600">
              Our sales departments handle both domestic and international markets, delivering responsive service to clients worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Logistics
            </h3>
            <p className="text-gray-600">
              The logistics team ensures efficient and accurate delivery of products across the globe.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Quality Control & Assurance
            </h3>
            <p className="text-gray-600">
              We implement rigorous quality control and assurance practices, including document verification, to maintain the highest standards.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Organization
