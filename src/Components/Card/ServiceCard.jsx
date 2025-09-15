const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className="w-full h-[400px] sm:h-[420px] md:h-[400px] lg:h-[420px] relative border-4 border-white rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg hover:shadow-xl group cursor-pointer">
      <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/80 absolute top-0 right-0 z-20 group-hover:to-orange-500/90 transition-colors duration-300"></div>
      <img 
        src={image} 
        alt={title || "Service image"} 
        className="w-full h-full object-cover z-10 group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute bottom-0 left-0 w-full z-30 p-4 sm:p-5 md:p-6">
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
          {title}
        </h2>
        <p className="text-sm text-white/95 leading-relaxed line-clamp-3 font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;