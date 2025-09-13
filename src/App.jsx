import React from 'react'
import Navbar from './Components/Common/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Services from './Sections/Services'
import Project from './Sections/project'
import Testimonial from './Sections/Testimonial'
import Footer from './Sections/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
