import React from "react";
import TestimonialCard from "../Components/Card/TestimonialCard";

const Testimonial = () => {
  // Sample testimonials data - you can replace with your actual data
  const testimonials = [
    {
      name: "Kavitha Ramesh",
      company: "SRD Infra",
      position: "Head of Marketing",
      review:
        "FORZIC has been a game-changer for us. From videography to motion graphics, every campaign was delivered with precision and creativity. The team understood our brand vision and executed it flawlessly, helping us establish a strong digital presence in a highly competitive industry.",
      star: 5,
    },
    {
      name: "Priyanka Mehra",
      company: "Beautician Freelancer Brand",
      position: "Founder",
      review:
        "As a freelancer, I needed a professional online presence to reach more clients. The website FORZIC built for me was not only elegant but also user-friendly. It has helped me attract new clients and showcase my services in the best light.",
      star: 5,
    },
    {
      name: "Naveen Subramani",
      company: "SSMT Construction",
      position: "Operations Manager",
      review:
        "Working with FORZIC was seamless. Their marketing solutions saved us time and resources. From creative production to campaign execution, everything was managed efficiently, and the results reflected in higher engagement with our target audience.",
      star: 4,
    },
    {
      name: "Ananya Pillai",
      company: "Vinson Interiors",
      position: "Creative Director,",
      review:
        "The creative videos and motion graphics developed by FORZIC truly elevated our brand identity. Their team has a keen eye for detail and consistently delivers content that resonates with our clients. It feels like they are an extended part of our creative team.",
      star: 5,
    },
    {
      name: "Suresh Varadhan",
      company: "Velan Kappi",
      position: "Owner",
      review:
        "The marketing campaigns managed by FORZIC brought in noticeable growth for our café. The video marketing was engaging, and the promotional strategies helped us attract a larger customer base. We could clearly see the difference in customer engagement.",
      star: 4,
    },
    {
      name: "Farheen Khan",
      company: "Hanu Reddy Realty",
      position: "Senior Sales Executive",
      review:
        "Real estate marketing demands strong visuals and impactful storytelling. FORZIC delivered exactly that. Their motion graphics and digital content gave our property listings a professional edge, making it easier for us to connect with potential buyers.",
      star: 4,
    },
  ];

  return (
    <section
      id="Testimonial"
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Love{" "}
            <span className="text-[#B2E447FF]">Letters...</span>
          </h1>
          <p className="text-zinc-900/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Our clients don't just work with us — they rave about us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm">
                <TestimonialCard
                  name={testimonial.name}
                  company={testimonial.company}
                  position={testimonial.position}
                  review={testimonial.review}
                  star={testimonial.star}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
