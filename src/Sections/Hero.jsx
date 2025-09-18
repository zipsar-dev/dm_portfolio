import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="Home"
      className="min-h-[calc(100vh-80px)] relative flex justify-center items-center flex-col px-4 py-8 overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(178,228,71,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(178,228,71,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/Images/Hero/h2.png" 
          alt="" 
          className="absolute top-1/4 right-2 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] -rotate-12 hidden sm:block"
        />
        <img 
          src="/Images/Hero/h1.png" 
          alt="" 
          className="absolute top-1/5 left-2 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-[200px] -rotate-12 hidden md:block"
        />
        <img 
          src="/Images/Hero/h1.png" 
          alt="" 
          className="absolute bottom-4 right-4 sm:right-8 md:right-16 lg:right-20 xl:right-25 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-[200px] rotate-12 hidden md:block"
        />
        <img 
          src="/Images/Hero/h3.png" 
          alt="" 
          className="absolute bottom-4 left-2 sm:left-4 md:left-8 lg:left-10 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] -rotate-45 hidden lg:block"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-2 text-center max-w-6xl relative z-10">
        <div className="relative">
          <h1 className="animate-fadeUp text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            We Craft Bold{" "}
            <span className="text-green-400 animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-[#B2E447] via-[#d7ff80] to-[#B2E447]">
              Digital
            </span>{" "}
            Stories
          </h1>
          <img 
            src="/Images/lines.png" 
            alt="illustration" 
            className="w-6 sm:w-8 md:w-10 lg:w-12 absolute -top-3 -right-1 sm:-top-4 sm:-right-1 md:-top-5 md:-right-2 lg:top-0 lg:-right-8"
          />
        </div>
        <h1 className="animate-fadeUp delay-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          That Sparkle, Engage and Convert
        </h1>
      </div>

      <p className="animate-fadeUp delay-300 text-gray-900/60 my-4 md:my-6 text-center text-sm sm:text-base max-w-4xl px-4 relative z-10">
        "From strategy to storytelling, we blend creativity with performance
        marketing to help brands shine in the digital playground."
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 animate-fadeUp delay-500">
        <img
          src="/Images/arrow.png"
          alt="Illustration"
          className="absolute -top-4 sm:-top-6 -right-6 sm:-right-10 w-10 sm:w-12 md:w-15 h-auto scale-x-[-1] opacity-80"
        />
        
        {/* Primary Button */}
        <Link to="Footer" smooth={true} duration={500} offset={-100}>
          <button
            className="cursor-pointer font-semibold py-3 px-6 md:py-4 md:px-8 text-white rounded-[40px] transition-colors duration-300 text-sm md:text-base w-full sm:w-auto text-center"
            style={{ background: "#B2E447FF" }}
          >
            Let's Create Magic
          </button>
        </Link>
        
        {/* Secondary Button */}
        <Link to="Project" smooth={true} duration={500} offset={-100}>
          <button
            className="cursor-pointer font-semibold border-2 px-6 py-3 md:px-8 md:py-4 rounded-[40px] transition-all duration-300 text-sm md:text-base w-full sm:w-auto text-center"
            style={{
              borderColor: "#B2E447FF",
              color: "#B2E447FF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#c6f75d";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#000000FF";
            }}
          >
            See Our Work
          </button>
        </Link>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
