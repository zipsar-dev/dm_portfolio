const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className="w-full h-full relative border-5 border-white rounded-3xl hover:scale-105 duration-75 overflow-hidden">
      <div className="w-full h-full bg-gradient-to-b from-transparent to-orange-400/60 absolute top-0 right-0 z-50"></div>
      <img src={image} alt="Image" className="w-full h-full object-fill z-10" />
      <div className="absolute bottom-0 left-0 w-full z-100">
        <h2 className="text-xl font-semibold text-white p-4">{title}</h2>
        <p className="text-sm text-white p-4 pt-0">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
