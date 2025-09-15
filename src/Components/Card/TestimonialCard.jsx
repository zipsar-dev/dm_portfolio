import React from 'react'
import { Quote } from 'lucide-react'

const TestimonialCard = ({name, company, review, star, position}) => {
  const starCount = Math.min(Math.max(star || 5, 1), 5)
  
  return (
    <div className='w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[380px] relative border-2 border-white/20 rounded-2xl sm:rounded-3xl hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between bg-gradient-to-br from-orange-400/25 via-orange-400/20 to-orange-400/15 backdrop-blur-md group'>
      
      {/* Quote Icon */}
      <div className='absolute top-3 sm:top-4 md:top-5 right-3 sm:right-4 md:right-5 transition-opacity duration-300'>
        <Quote className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white' />
      </div>
      
      {/* Header Section */}
      <div className='mb-4 sm:mb-5 md:mb-6'>
        {/* Name and Company */}
        <div>
          <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight'>
            {name || 'Anonymous'}
          </h1>
          <div className='space-y-1'>
            {position && (
              <h3 className='text-xs sm:text-sm md:text-base text-white/80 font-medium leading-tight'>
                {position}
              </h3>
            )}
            <h2 className='text-sm sm:text-base md:text-lg text-orange-400 font-semibold leading-tight'>
              {company || 'Company'}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Review Text */}
      <div className='flex-1 mb-4 sm:mb-5 md:mb-6'>
        <p className='text-sm sm:text-base md:text-lg text-white/90 leading-relaxed'>
          "{review || 'Great service and excellent results. Highly recommended for anyone looking for quality work.'}"
        </p>
      </div>
      
      {/* Star Rating */}
      <div className='flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10'>
        <div className='flex items-center gap-1'>
          {Array(5).fill().map((_, idx) => (
            <svg 
              key={idx} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-200 ${
                idx < starCount ? 'text-orange-500' : 'text-gray-400/50'
              }`}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.034 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
        </div>
        <span className='text-xs sm:text-sm md:text-base text-white/70 font-medium'>
          {starCount}/5
        </span>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-orange-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none'></div>
    </div>
  )
}

export default TestimonialCard