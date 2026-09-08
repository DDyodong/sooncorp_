import { motion } from 'framer-motion'

function Footer() {
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
    <motion.footer
      className="bg-gray-800 py-8 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p variants={itemVariants}>
          &copy; {new Date().getFullYear()} SOON Corporation. All rights
          reserved.
          <p>Business Registration No: 737-03-01553 | CEO: SY Kwon</p>
        </motion.p>

        {/* Freepik 크레딧 */}
        <motion.p 
          variants={itemVariants} 
          className="text-xs text-gray-400 mt-2"
        >
          Images by{' '}
          <a 
            href="https://www.freepik.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-300"
          >
            Freepik
          </a>
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default Footer