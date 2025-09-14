/* eslint-disable no-undef */
import { useState } from 'react'
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
    <div className='w-full flex justify-center items-center mt-5 px-4 sticky top-8 z-100'>
      <div className='w-full max-w-6xl h-full flex justify-center items-center text-black rounded-[50px] lg:rounded-[80px] relative overflow-visible py-1 lg:py-2' 
           style={{
             background: 'rgba(255, 255, 255, 0.95)',
             backdropFilter: 'blur(20px)',
             border: '1px solid rgba(255, 255, 255, 0.3)',
             boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
           }}>
        
        {/* Glassy background overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-[50px] lg:rounded-[80px]'></div>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex w-[85%] justify-between items-center px-6 relative z-10'>
          <Link 
            to="Home" 
            smooth={true} 
            duration={500}
            spy={true}
            offset={-100}
            activeClass="!text-orange-500 "
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-full'
          >
            <span className='font-medium text-sm'>Home</span>
          </Link>
          
          <Link 
            to="About" 
            smooth={true} 
            duration={500}
            spy={true}
            offset={-100}
            activeClass="!text-orange-500 "
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-full'
          >
            <span className='font-medium text-sm'>About</span>
          </Link>
          
          <Link 
            to="Services" 
            smooth={true} 
            duration={500}
            spy={true}
            offset={-100}
            activeClass="!text-orange-500 "
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-full'
          >
            <span className='font-medium text-sm'>Services</span>
          </Link>
          
          <h1 className='font-bold text-2xl xl:text-3xl text-gray-900'>
            Logo
          </h1>
          
          <Link 
            to="Project" 
            smooth={true} 
            duration={500}
            spy={true}
            offset={-100}
            activeClass="!text-orange-500 "
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-full'
          >
            <span className='font-medium text-sm'>Project</span>
          </Link>
          
          <Link 
            to="Testimonial" 
            smooth={true} 
            duration={500}
            spy={true}
            offset={-100}
            activeClass="!text-orange-500 "
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-full'
          >
            <span className='font-medium text-sm'>Testimonial</span>
          </Link>
          
          <Link 
            to="Footer" 
            smooth={true} 
            duration={500}
            spy={true}
            offset={-100}
            activeClass="!text-orange-500 "
            className='flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-full'
          >
            <span className='font-medium text-sm'>Contact</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden w-full flex justify-between items-center px-6 relative z-10'>
          <h1 className='font-bold text-xl text-gray-900'>
            Logo
          </h1>
          
          <button 
            onClick={toggleMenu}
            className='p-2 rounded-lg transition-all duration-200 hover:bg-orange-100/50 backdrop-blur-sm text-gray-800 hover:text-orange-500'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className='lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl shadow-2xl py-4 z-50 overflow-hidden animate-slideDown'
               style={{
                 background: 'rgba(255, 255, 255, 0.98)',
                 backdropFilter: 'blur(20px)',
                 border: '1px solid rgba(255, 255, 255, 0.8)',
                 boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.15)'
               }}>
            {/* Mobile dropdown background */}
            <div className='absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/20 rounded-2xl'></div>
            
            <div className='flex flex-col space-y-2 px-4 relative z-10'>
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isFirst = index === 0;
                const isLast = index === navItems.length - 1;
                
                if (isLast) {
                  return (
                    <div
                      key={index}
                      className='flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:text-orange-500 transition-all duration-200 font-medium hover:bg-orange-50/60 backdrop-blur-sm text-gray-800 border border-transparent hover:border-orange-200/50'
                      onClick={() => {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                    >
                      <IconComponent size={18} className="text-orange-400" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={index}
                    to={item?.to}
                    smooth={true}
                    duration={500}
                    offset={isFirst ? -100 : -100}
                    spy={false}
                    className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:text-orange-500 transition-all duration-200 font-medium hover:bg-orange-50/60 backdrop-blur-sm text-gray-800 border border-transparent hover:border-orange-200/50 ${
                      activeSection === item.to ? '!text-orange-500  !border-orange-200/50' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent size={18} className="text-orange-400" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Navbar