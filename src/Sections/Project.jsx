import React from 'react'

const projects = [
  {
    image: '/Images/proj-1.jpg',
    title: 'Project Title 1',
    desc: 'A brief description of the project highlighting key features and technologies used.'
  },
  {
    image: '/Images/proj-2.jpg',
    title: 'Project Title 2',
    desc: 'A brief description of the project highlighting key features and technologies used.'
  },
  {
    image: '/Images/proj-3.jpg',
    title: 'Project Title 3',
    desc: 'A brief description of the project highlighting key features and technologies used.'
  },
  // Add more projects as needed
]

const Project = () => {
  return (
    <section 
      id='Project' 
      className='min-h-screen flex justify-center items-center flex-col bg-white/0 py-8 sm:py-12 md:py-16 lg:py-20'
    >
      {/* Header Section */}
      <div className='flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16 px-4 max-w-4xl'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 leading-tight'>
          Playground <span className='text-orange-400'>Showcase...</span>
        </h1>
        <p className='text-zinc-900/50 text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl leading-relaxed'>
          Here's a peek at some of the magic we've crafted for brands who dared to play bold.
        </p>
      </div>

      {/* Projects Grid Container */}
      <div className='w-full flex justify-center items-center px-4 sm:px-6 md:px-8'>
        <div className='w-full max-w-7xl'>
          
          {/* Mobile Layout: Single Column */}
          <div className='grid grid-cols-1 gap-6 sm:gap-8 sm:hidden'>
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className='w-full h-[280px] relative rounded-2xl overflow-hidden border-3 border-white shadow-xl backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group'
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-orange-400/80 via-black/40 to-transparent'></div>
                <div className='absolute bottom-0 left-0 w-full z-10 p-4'>
                  <h2 className='text-lg font-semibold text-white drop-shadow-lg mb-1 leading-tight'>
                    {proj.title}
                  </h2>
                  <p className='text-sm text-white/90 leading-relaxed line-clamp-2'>
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Small Tablet Layout: Single Column with larger cards */}
          <div className='hidden sm:grid md:hidden grid-cols-1 gap-8'>
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className='w-full h-[320px] relative rounded-2xl overflow-hidden border-3 border-white shadow-xl backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group'
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-orange-400/75 via-black/35 to-transparent'></div>
                <div className='absolute bottom-0 left-0 w-full z-10 p-5'>
                  <h2 className='text-xl font-semibold text-white drop-shadow-lg mb-2 leading-tight'>
                    {proj.title}
                  </h2>
                  <p className='text-sm text-white/90 leading-relaxed'>
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Medium Tablet Layout: 2 Columns */}
          <div className='hidden md:grid lg:hidden grid-cols-2 gap-6 md:gap-8'>
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className='w-full h-[340px] relative rounded-3xl overflow-hidden border-3 border-white shadow-xl backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group'
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-orange-400/70 via-black/30 to-transparent'></div>
                <div className='absolute bottom-0 left-0 w-full z-10 p-4'>
                  <h2 className='text-lg font-semibold text-white drop-shadow-lg mb-1 leading-tight'>
                    {proj.title}
                  </h2>
                  <p className='text-sm text-white/90 leading-relaxed line-clamp-3'>
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Large Desktop Layout: 3 Columns */}
          <div className='hidden lg:grid xl:hidden grid-cols-3 gap-8'>
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className='w-full h-[360px] relative rounded-3xl overflow-hidden border-3 border-white shadow-xl backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group'
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-orange-400/70 via-black/30 to-transparent'></div>
                <div className='absolute bottom-0 left-0 w-full z-10 p-5'>
                  <h2 className='text-xl font-semibold text-white drop-shadow-lg mb-2 leading-tight'>
                    {proj.title}
                  </h2>
                  <p className='text-sm text-white/90 leading-relaxed'>
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Large Desktop Layout: 3 Columns with larger cards */}
          <div className='hidden xl:grid grid-cols-3 gap-10'>
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className='w-full h-[400px] relative rounded-3xl overflow-hidden border-3 border-white shadow-xl backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group'
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-orange-400/70 via-black/30 to-transparent'></div>
                <div className='absolute bottom-0 left-0 w-full z-10 p-6'>
                  <h2 className='text-2xl font-semibold text-white drop-shadow-lg mb-3 leading-tight'>
                    {proj.title}
                  </h2>
                  <p className='text-base text-white/90 leading-relaxed'>
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Project