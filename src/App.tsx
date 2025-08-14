import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import StockProgram from './components/StockProgram'
import Organization from './components/Organization'
import ExperienceList from './components/ExperienceList'
import AfterSalesService from './components/AfterSalesService'
import Suppliers from './components/Suppliers'
import Contact from './components/Contact'
import Header from './components/Header'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
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

export default App
