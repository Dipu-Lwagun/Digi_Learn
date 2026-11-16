import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Course'
import WhyChooseUs from './Pages/why-choose-us'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/course' element={<Course />} />
      <Route path='/why-choose-us' element={<WhyChooseUs />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
