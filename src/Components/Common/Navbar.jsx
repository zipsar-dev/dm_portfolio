import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X, Home, User, Settings, Briefcase, MessageSquare, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', icon: Home, to: 'Home' },
    { name: 'About', icon: User, to: 'About' },
    { name: 'Services', icon: Settings, to: 'Services' },
    { name: 'Project', icon: Briefcase, to: 'Project' },
    { name: 'Testimonial', icon: MessageSquare, to: 'Testimonial' },
    { name: 'Contact', icon: Phone, to: 'Footer' }
  ]

  return (
  <div className='w-full flex justify-center items-center mt-5 px-4 sticky top-8 z-50'>
      <div className='w-full max-w-6xl h-full flex justify-center items-center text-black rounded-[50px] lg:rounded-[80px] relative overflow-hidden py-1 lg:py-2' 
           style={{
             background: 'rgba(255, 255, 255, 0.1)',
             backdropFilter: 'blur(20px)',
             border: '1px solid rgba(255, 255, 255, 0.2)',
             boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
           }}>
        
        {/* Glassy background overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[50px] lg:rounded-[80px]'></div>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex w-[85%] justify-between items-center px-6 relative z-10'>
          <Link 
            to="Home" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2'
          >
            <span className='font-medium text-sm'>Home</span>
          </Link>
          
          <Link 
            to="About" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2'
          >
            <span className='font-medium text-sm'>About</span>
          </Link>
          
          <Link 
            to="Services" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2'
          >
            <span className='font-medium text-sm'>Services</span>
          </Link>
          
          <h1 className='font-bold text-2xl xl:text-3xl text-black'>
            Logo
          </h1>
          
          <Link 
            to="Project" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2'
          >
            <span className='font-medium text-sm'>Project</span>
          </Link>
          
          <Link 
            to="Testimonial" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2'
          >
            <span className='font-medium text-sm'>Testimonial</span>
          </Link>
          
          <Link 
            to="Footer" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2'
          >
            <span className='font-medium text-sm'>Contact</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden w-full flex justify-between items-center px-6 relative z-10'>
          <h1 className='font-bold text-xl text-black'>
            Logo
          </h1>
          
          <button 
            onClick={toggleMenu}
            className='p-2 rounded-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className='lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl shadow-2xl py-4 z-50 overflow-hidden'
               style={{
                 background: 'rgba(255, 255, 255, 0.1)',
                 backdropFilter: 'blur(20px)',
                 border: '1px solid rgba(255, 255, 255, 0.2)',
                 boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
               }}>
            {/* Mobile dropdown glassy background */}
            <div className='absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/5 rounded-2xl'></div>
            
            <div className='flex flex-col space-y-1 px-4 relative z-10'>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item?.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-400 bg-white/10"
                  className='p-3 rounded-lg cursor-pointer hover:text-orange-400 transition-all duration-200 font-medium hover:bg-white/10 backdrop-blur-sm text-black'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar