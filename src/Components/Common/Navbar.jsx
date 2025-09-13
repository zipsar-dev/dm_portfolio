import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X, Home, User, Settings, Briefcase, MessageSquare, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Services', icon: Settings },
    { name: 'Project', icon: Briefcase },
    { name: 'Testimonial', icon: MessageSquare },
    { name: 'Contact', icon: Phone }
  ]

  return (
    <div className='w-full flex justify-center items-center mt-5 px-4 border border-black'>
      <div className='w-full max-w-6xl h-full flex justify-center items-center text-white rounded-[50px] lg:rounded-[80px] bg-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 shadow-2xl py-1 lg:py-2'>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex w-[85%] justify-between items-center px-6'>
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105'
          >
            <span className='font-medium'>Home</span>
          </Link>
          
          <Link 
            to="about" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105'
          >
            <span className='font-medium'>About</span>
          </Link>
          
          <Link 
            to="services" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105'
          >
            <span className='font-medium'>Services</span>
          </Link>
          
          <h1 className='font-bold text-2xl xl:text-3xl'>
            Logo
          </h1>
          
          <Link 
            to="project" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105'
          >
            <span className='font-medium'>Project</span>
          </Link>
          
          <Link 
            to="testimonial" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105'
          >
            <span className='font-medium'>Testimonial</span>
          </Link>
          
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105'
          >
            <span className='font-medium'>Contact</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden w-full flex justify-between items-center px-6'>
          <h1 className='font-bold text-xl '>
            Logo
          </h1>
          
          <button 
            onClick={toggleMenu}
            className='p-2 hover:bg-zinc-700/50 rounded-lg transition-colors duration-200'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className='lg:hidden absolute top-full left-4 right-4 mt-2 bg-zinc-800/95 backdrop-blur-sm border border-zinc-700/50 rounded-2xl shadow-2xl py-4 z-50'>
            <div className='flex flex-col space-y-1 px-4'>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-400 bg-zinc-700/50"
                  className='p-3 rounded-lg hover:bg-zinc-700/50 cursor-pointer hover:text-orange-400 transition-all duration-200 font-medium'
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