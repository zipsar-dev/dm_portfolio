const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className="w-full h-[280px] sm:h-[320px] md:h-[300px] lg:h-[400px] xl:h-[450px] relative border-4 border-white rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg hover:shadow-xl">
      <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-orange-400/70 absolute top-0 right-0 z-20"></div>
      <img 
        src={image} 
        alt={title || "Service image"} 
        className="w-full h-full object-cover z-10" 
      />
      <div className="absolute bottom-0 left-0 w-full z-30 p-3 sm:p-4 md:p-5">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-2 leading-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;