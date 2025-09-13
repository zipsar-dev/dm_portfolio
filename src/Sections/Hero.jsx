import React from "react";

const Hero = () => {
  return (
    <section
      id="Home"
      className="h-[calc(100vh-80px)] flex justify-center items-center flex-col relative"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl font-bold">We Craft Bold <span className="text-orange-400">Digital</span> Stories</h1>
        <h1 className="text-4xl font-bold">That Sparkle, Engage and Convert</h1>
      </div>
      <p className="text-gray-900/60 my-2">"From strategy to storytelling, we blend creativity with performance marketing to help brands shine in the digital playground."</p>
      <div className="flex gap-4 mt-4">
        <button className="cursor-pointer font-semibold py-2 px-4 text-white bg-orange-400 rounded-[40px]">Let's Create Magic</button>
        <button className="cursor-pointer font-semibold border-2 px-4 py-2 text-orange-400 border-orange-400 rounded-[40px]">See Our Work</button>
      </div>
    </section>
  );
};

export default Hero;
