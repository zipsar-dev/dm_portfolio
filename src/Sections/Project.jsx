import React, { useState } from 'react'

const projects = [
  {
    image: '/Images/Project/beautician.jpg',
    title: 'Beautician Freelancer',
    desc: 'Designed and developed a professional website, building her online presence and enabling client outreach.',
    category: 'Web Development'
  },
  {
    image: '/Images/Project/srd.jpg',
    title: 'SRD Infra',
    desc: 'Delivered complete marketing support, including videography, editing, motion graphics, and content writing to establish a strong digital footprint.',
    category: 'Construction Brand'
  },
  {
    image: '/Images/Project/ssmt.jpg',
    title: 'SSMT',
    desc: 'Executed full-scale marketing services covering creative production, content development, and promotional campaigns.',
    category: 'Construction & Infrastructure'
  },
  {
    image: '/Images/Project/ss.jpg',
    title: 'SS Engineering',
    desc: 'Provided end-to-end marketing solutions with video content, graphics, and brand-focused media strategies.',
    category: 'Interior Design & Engineering'
  },
  {
    image: '/Images/Project/vinson.png',
    title: 'Vinson Interiors',
    desc: 'Strengthened brand positioning through creative videos, motion graphics, and tailored marketing campaigns.',
    category: 'Interior Design Firm'
  },
  {
    image: '/Images/Project/velan.png',
    title: 'Velan Kappi',
    desc: 'Managed promotional campaigns, video marketing, and engaging content to attract a larger customer base.',
    category: 'Café'
  },
  {
    image: '/Images/Project/radio.jpg',
    title: "Radio 80's & Discount 365",
    desc: 'Produced promotional content, branding materials, and digital marketing strategies to improve visibility and sales.',
    category: 'Clothing & Retail Brands'
  },
  {
    image: '/Images/Project/hanu.jpg',
    title: 'Hanu Reddy Realty',
    desc: 'Created impactful digital content, motion graphics, and brand communication assets to support property marketing.',
    category: 'Real Estate Promoter'
  },
  {
    image: '/Images/Project/funmall.jpg',
    title: 'Fun Mall',
    desc: 'Executed event promotions and on-ground marketing campaigns to increase footfall and customer engagement.',
    category: 'Event Marketing'
  }
]

const Project = () => {
  const [showAll, setShowAll] = useState(false)

  const toggleProjects = () => {
    setShowAll(!showAll)
  }

  // Function to get projects to display
  const getProjectsToShow = () => {
    return showAll ? projects : projects.slice(0, 6)
  }

  const ProjectCard = ({ proj, idx }) => (
    <div
      key={idx}
      className='group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100'
    >
      <div className='relative h-[320px] sm:h-[360px] md:h-[380px] lg:h-[340px] xl:h-[360px] overflow-hidden'>
        <img 
          src={proj.image} 
          alt={proj.title} 
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        {/* Overlay remains but no color change on hover */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500'></div>
        
        {/* Category Badge */}
        <div className='absolute top-4 right-4 lg:top-5 lg:right-5'>
          <span className='bg-white/90 backdrop-blur-md text-gray-800 text-xs lg:text-sm font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg border border-white/50'>
            {proj.category}
          </span>
        </div>
        
        {/* Content */}
        <div className='absolute bottom-0 left-0 right-0 p-5 lg:p-6'>
          <h3 className='text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 lg:mb-3 leading-tight transition-colors duration-300'>
            {proj.title}
          </h3>
          <p className='text-white/90 text-sm lg:text-base leading-relaxed line-clamp-3 transition-colors duration-300'>
            {proj.desc}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <section 
      id='Project' 
      className='min-h-screen flex justify-center items-center flex-col py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-10 left-10 w-64 h-64 bg-[#dff8b0]/40 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lime-200/10 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20 px-4 max-w-5xl relative z-10'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight flex items-center gap-3'>
          Playground <span className='bg-gradient-to-r from-[#B2E447FF] to-[#c6f75d] bg-clip-text text-transparent'>Showcase</span>
          <img src="/Images/lines.png" alt="" className="w-10"/>
        </h1>
        <p className='text-gray-600 text-base sm:text-lg md:text-xl text-center max-w-4xl leading-relaxed font-medium'>
          Here's a peek at some of the magic we've crafted for brands who dared to play bold and transform their digital presence.
        </p>
      </div>

      {/* Projects Grid Container */}
      <div className='w-full flex justify-center items-center px-4 sm:px-6 md:px-8 relative z-10'>
        <div className='w-full max-w-7xl'>
          
          {/* Mobile Layout: Single Column */}
          <div className='grid grid-cols-1 gap-6 sm:gap-8 sm:hidden'>
            {getProjectsToShow().map((proj, idx) => (
              <ProjectCard key={idx} proj={proj} idx={idx} />
            ))}
          </div>

          {/* Small Tablet Layout: Single Column */}
          <div className='hidden sm:grid md:hidden grid-cols-1 gap-8'>
            {getProjectsToShow().map((proj, idx) => (
              <ProjectCard key={idx} proj={proj} idx={idx} />
            ))}
          </div>

          {/* Medium Tablet Layout: 2 Columns */}
          <div className='hidden md:grid lg:hidden grid-cols-2 gap-6 md:gap-8'>
            {getProjectsToShow().map((proj, idx) => (
              <ProjectCard key={idx} proj={proj} idx={idx} />
            ))}
          </div>

          {/* Large Desktop Layout: 3 Columns */}
          <div className='hidden lg:grid xl:hidden grid-cols-3 gap-6'>
            {getProjectsToShow().map((proj, idx) => (
              <ProjectCard key={idx} proj={proj} idx={idx} />
            ))}
          </div>

          {/* Extra Large Desktop Layout: 3 Columns */}
          <div className='hidden xl:grid grid-cols-3 gap-8'>
            {getProjectsToShow().map((proj, idx) => (
              <ProjectCard key={idx} proj={proj} idx={idx} />
            ))}
          </div>
          
        </div>
      </div>

      {/* Toggle Button (same as Hero button) */}
      <div className='mt-12 lg:mt-16 text-center relative z-10'>
        <button 
          onClick={toggleProjects}
          className="cursor-pointer font-semibold py-3 px-6 md:py-4 md:px-8 text-white rounded-[40px] transition-colors duration-300 text-sm md:text-base bg-[#B2E447FF]"
        >
          {showAll ? 'View Less Projects' : 'View More Projects'}
        </button>
      </div>
    </section>
  )
}

export default Project
