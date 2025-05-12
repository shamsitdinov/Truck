import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Form from './components/Form';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
