const Hero = () => {
  return (
    <section
      id="Home"
      className="min-h-[calc(100vh-80px)] flex justify-center items-center flex-col relative px-4 py-8"
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          We Craft Bold <span className="text-orange-400">Digital</span> Stories
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          That Sparkle, Engage and Convert
        </h1>
      </div>
      <p className="text-gray-900/60 my-4 md:my-6 text-center text-sm sm:text-base max-w-4xl px-4">
        "From strategy to storytelling, we blend creativity with performance marketing to help brands shine in the digital playground."
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
        <img src="/Images/arrow.png" alt="Illustration" className="absolute -top-6 -right-10 w-15 h-auto scale-x-[-1]"/>
        <button className="cursor-pointer font-semibold py-3 px-6 md:py-4 md:px-8 text-white bg-orange-400 rounded-[40px] hover:bg-orange-500 transition-colors duration-300 text-sm md:text-base">
          Let's Create Magic
        </button>
        <button className="cursor-pointer font-semibold border-2 px-6 py-3 md:px-8 md:py-4 text-orange-400 border-orange-400 rounded-[40px] hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm md:text-base">
          See Our Work
        </button>
      </div>
    </section>
  );
};

export default Hero;