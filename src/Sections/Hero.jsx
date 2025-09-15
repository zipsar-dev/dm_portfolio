import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="Home"
      className="min-h-[calc(100vh-80px)] relative flex justify-center items-center flex-col px-4 py-8 overflow-hidden"
    >
      {/* Background Illustrations - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right illustration */}
        <img 
          src="/Images/Hero/h2.png" 
          alt="" 
          className="absolute top-1/4 right-2 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] -rotate-12 hidden sm:block"
        />
        
        {/* Top left illustration */}
        <img 
          src="/Images/Hero/h1.png" 
          alt="" 
          className="absolute top-1/5 left-2 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-[200px] -rotate-12 hidden md:block"
        />
        
        {/* Bottom right illustration */}
        <img 
          src="/Images/Hero/h1.png" 
          alt="" 
          className="absolute bottom-4 right-4 sm:right-8 md:right-16 lg:right-20 xl:right-25 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-[200px] rotate-12 hidden md:block"
        />
        
        {/* Bottom left illustration */}
        <img 
          src="/Images/Hero/h3.png" 
          alt="" 
          className="absolute bottom-4 left-2 sm:left-4 md:left-8 lg:left-10 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] -rotate-45 hidden lg:block"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-2 text-center max-w-6xl relative z-10">
        <div className="relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            We Craft Bold <span className="text-orange-400">Digital</span> Stories
          </h1>
          <img 
            src="/Images/lines.png" 
            alt="illustration" 
            className="w-6 sm:w-8 md:w-10 lg:w-12 absolute -top-3 -right-1 sm:-top-4 sm:-right-1 md:-top-5 md:-right-2 lg:top-0 lg:-right-8"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          That Sparkle, Engage and Convert
        </h1>
      </div>

      <p className="text-gray-900/60 my-4 md:my-6 text-center text-sm sm:text-base max-w-4xl px-4 relative z-10">
        "From strategy to storytelling, we blend creativity with performance
        marketing to help brands shine in the digital playground."
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <img
          src="/Images/arrow.png"
          alt="Illustration"
          className="absolute -top-4 sm:-top-6 -right-6 sm:-right-10 w-10 sm:w-12 md:w-15 h-auto scale-x-[-1] opacity-80"
        />
        
        <Link to="Footer" smooth={true} duration={500} offset={-100}>
          <button className="cursor-pointer font-semibold py-3 px-6 md:py-4 md:px-8 text-white bg-orange-400 rounded-[40px] hover:bg-orange-500 transition-colors duration-300 text-sm md:text-base">
            Let's Create Magic
          </button>
        </Link>
        
        <Link to="Project" smooth={true} duration={500} offset={-100}>
          <button className="cursor-pointer font-semibold border-2 px-6 py-3 md:px-8 md:py-4 text-orange-400 border-orange-400 rounded-[40px] hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm md:text-base">
            See Our Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;