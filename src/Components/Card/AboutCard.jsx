import React from 'react'

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="w-full h-full border-2 rounded-2xl border-[#B2E447FF] p-5 flex flex-col justify-start items-center hover:scale-105 duration-300 cursor-pointer relative bg-white/50">
      <div className="p-3 rounded-xl bg-[#eafbcf] absolute -top-5 left-5">
        {icon}
      </div>
      <h1 className="font-semibold text-lg mt-8 mb-3 text-start">{title}</h1>
      <p className="text-gray-900/60 text-sm">{description}</p>
    </div>
  )
}

export default AboutCard
