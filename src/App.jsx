import React from 'react'
import Navbar from './Components/Common/Navbar.jsx'
import Hero from './Sections/Hero.jsx'
import About from './Sections/About.jsx'
import Services from './Sections/Services.jsx'
import Project from './Sections/Project.jsx'
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
