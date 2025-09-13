import { ChartColumnIncreasing, Component, Lightbulb, PenTool } from "lucide-react";
import React from "react";
import AboutCard from "../Components/Card/AboutCard";

const About = () => {
  return (
    <section id="About" className="h-screen flex justify-center items-center flex-col">
      <div>
        <h1 className="font-bold text-4xl">Our <span className="text-orange-400">Vibe..</span></h1>
      </div>
      <div className="w-[80%] flex items-center justify-between mx-auto mt-10">
        <div className="w-[48%]">
            <img src="/Images/about.png" alt="About Image" className="w-full h-full object-fill" />
        </div>
        <div className="w-[48%]">
          <p className="md:text-sm">
            We are a passionate team of digital marketing professionals who
            believe that great brands are built at the intersection of
            creativity, strategy, and technology. Our journey started with a
            simple vision: to help businesses stand out in the crowded digital
            landscape by combining innovative ideas with measurable results.<br/><br/> At
            our core, we are more than just marketers — we are storytellers,
            designers, analysts, and problem solvers. Every campaign we create
            is tailored to reflect your brand’s unique identity, while staying
            aligned with your long-term business goals. We understand that
            digital marketing is not just about ads or posts, but about creating
            meaningful connections with your audience.<br/><br/> Our strength lies in
            blending creativity with data-driven decision-making. From building
            visually striking campaigns to optimizing them for performance, we
            ensure that every step delivers value. Whether it’s growing your
            online presence, generating leads, or increasing engagement, we
            focus on strategies that bring real, lasting results.<br/><br/> Above all, we
            believe in transparency, collaboration, and trust. When you work
            with us, you gain a partner who is as invested in your success as
            you are. Together, we’ll transform ideas into impact and make your
            brand truly unforgettable.
          </p>
        </div>
      </div>
      <div className="mt-10 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <AboutCard 
        title="Creative & Bold Strategies"
        description="Tailored strategies that help your brand stand out and grow with impact."
        icon={<PenTool />}
        />
         <AboutCard 
        title="Designs That Stand Out"
        description="Compelling visuals that reflect your identity and engage your audience."
        icon={<Component />}
        />
         <AboutCard 
        title="Data-Driven Decisions"
        description="Campaigns optimized through insights and measurable performance metrics."
        icon={<ChartColumnIncreasing />}
        />
         <AboutCard 
        title="Innovation at Every Step"
        description="Fresh ideas and modern tools to keep your brand ahead of the curve."
        icon={<Lightbulb />}
        />
      </div>
    </section>
  );
};

export default About;
