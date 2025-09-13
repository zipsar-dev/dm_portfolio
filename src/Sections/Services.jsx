import ServiceCard from "../Components/Card/ServiceCard";

const Services = () => {
  return (
    <section
      id="Services"
      className="min-h-screen flex justify-center items-center flex-col py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
          Digital <span className="text-orange-400">Magic...</span>
        </h1>
        <p className="text-zinc-700/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
          We sprinkle creativity with strategy to make your brand impossible to
          ignore.
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-7xl">
        {/* Mobile: Single Column */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:hidden">
          <ServiceCard 
            title="Social Media Marketing"
            desc="We make your brand the talk of the digital town with engaging content and strategic campaigns."
            image="/Images/p1.jpg"
          />
          <ServiceCard 
            title="Brand Strategy"
            desc="Craft compelling brand stories that resonate with your audience and drive meaningful connections."
            image="/Images/p2.jpg"
          />
          <ServiceCard 
            title="Digital Advertising"
            desc="Targeted campaigns that deliver measurable results and maximize your return on investment."
            image="/Images/p1.jpg"
          />
          <ServiceCard 
            title="Content Creation"
            desc="Visual storytelling that captures attention and transforms browsers into loyal customers."
            image="/Images/p2.jpg"
          />
        </div>

        {/* Tablet: 2x2 Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 md:gap-8">
          <ServiceCard 
            title="Social Media Marketing"
            desc="We make your brand the talk of the digital town with engaging content and strategic campaigns."
            image="/Images/p1.jpg"
          />
          <ServiceCard 
            title="Brand Strategy"
            desc="Craft compelling brand stories that resonate with your audience and drive meaningful connections."
            image="/Images/p2.jpg"
          />
          <ServiceCard 
            title="Digital Advertising"
            desc="Targeted campaigns that deliver measurable results and maximize your return on investment."
            image="/Images/p1.jpg"
          />
          <ServiceCard 
            title="Content Creation"
            desc="Visual storytelling that captures attention and transforms browsers into loyal customers."
            image="/Images/p2.jpg"
          />
        </div>

        {/* Desktop: Single Row */}
        <div className="hidden lg:grid grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          <ServiceCard 
            title="Social Media Marketing"
            desc="We make your brand the talk of the digital town with engaging content and strategic campaigns."
            image="/Images/p1.jpg"
          />
          <ServiceCard 
            title="Brand Strategy"
            desc="Craft compelling brand stories that resonate with your audience and drive meaningful connections."
            image="/Images/p2.jpg"
          />
          <ServiceCard 
            title="Digital Advertising"
            desc="Targeted campaigns that deliver measurable results and maximize your return on investment."
            image="/Images/p1.jpg"
          />
          <ServiceCard 
            title="Content Creation"
            desc="Visual storytelling that captures attention and transforms browsers into loyal customers."
            image="/Images/p2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;