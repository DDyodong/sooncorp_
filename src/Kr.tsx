import Hero from './krcomponents/Hero'
import AboutUs from './krcomponents/AboutUs'
import Footer from './krcomponents/Footer'
import StockProgram from './krcomponents/StockProgram'
import Organization from './krcomponents/Organization'
import ExperienceList from './krcomponents/ExperienceList'
import AfterSalesService from './krcomponents/AfterSalesService'
import Suppliers from './krcomponents/Suppliers'
import Contact from './krcomponents/Contact'
import Header from './krcomponents/Header'
import { motion } from 'framer-motion'


function App() { 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header/>
      <Hero />
      <AboutUs />
      <StockProgram />
      <Organization />
      <ExperienceList />
      <AfterSalesService />
      <Suppliers />
      <Contact />
      <Footer />
    </motion.div>
  )
}
//한국어 페이지는 이 순서대로 표시되게 되어 있음
export default App
