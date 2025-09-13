import ServiceCard from "../Components/Card/ServiceCard";

const Services = () => {
  return (
    <section
      id="Services"
      className="min-h-screen flex justify-center items-center flex-col py-12 px-4"
    >
      <div className="flex flex-col items-center justify-center text-center mb-12 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Digital <span className="text-orange-400">Magic...</span>
        </h1>
        <p className="text-zinc-700/70 text-base leading-relaxed">
          We sprinkle creativity with strategy to make your brand impossible to
          ignore.
        </p>
      </div>

      <div className="w-full h-[50vh] max-w-7xl gap-6 sm:gap-8 md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <ServiceCard 
          title={'Social Media Marketing'} 
          desc={'We make your brand the talk of the digital town with engaging content and strategic campaigns.'} 
          image={'/Images/p1.jpg'}
        />
        <ServiceCard 
          title={'Brand Strategy'} 
          desc={'Craft compelling brand stories that resonate with your audience and drive meaningful connections.'} 
          image={'/Images/p2.jpg'}
        />
        <ServiceCard 
          title={'Digital Advertising'} 
          desc={'Targeted campaigns that deliver measurable results and maximize your return on investment.'} 
          image={'/Images/p1.jpg'}
        />
        <ServiceCard 
          title={'Content Creation'} 
          desc={'Visual storytelling that captures attention and transforms browsers into loyal customers.'} 
          image={'/Images/p2.jpg'}
        />
      </div>
    </section>
  );
};

export default Services;