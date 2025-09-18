import React from "react";

const Loading = ({ message = "Loading", subtitle = "Preparing your experience..." }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Center content container */}
      <div className="flex flex-col items-center gap-8">
        {/* Circular loader */}
        <div className="relative">
          <svg
            className="w-20 h-20"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#E6F8C8"
              strokeWidth="4"
              opacity="0.3"
            />
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#B2E447"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="animate-spinStroke"
              strokeDasharray="31.416 31.416"
            />
          </svg>
        </div>

        {/* Text content */}
        <div className="text-center space-y-4">
          {/* Main loading message */}
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            <span className="inline-block animate-fadeUp">{message}</span>
            <span className="ml-1 inline-block text-lime-400 animate-pulse">...</span>
          </h2>
          
          {/* Subtitle */}
          <div className="text-sm sm:text-base text-gray-600 animate-fadeUp">
            {subtitle}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spinStroke {
          0% { 
            stroke-dashoffset: 0;
            transform: rotate(0deg);
          }
          50% { 
            stroke-dashoffset: -15.708;
            transform: rotate(180deg);
          }
          100% { 
            stroke-dashoffset: -31.416;
            transform: rotate(360deg);
          }
        }
        
        .animate-spinStroke {
          animation: spinStroke 1.5s ease-in-out infinite;
          transform-origin: 50% 50%;
        }

        @keyframes fadeUp {
          0% { 
            transform: translateY(20px); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
        
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loading;