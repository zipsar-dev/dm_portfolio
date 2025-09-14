import React from "react";
import TestimonialCard from "../Components/Card/TestimonialCard";

const Testimonial = () => {
  // Sample testimonials data - you can replace with your actual data
  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Corp",
      position: "CEO",
      review: "Amazing service! They delivered exactly what we needed and exceeded our expectations in every way.",
      star: 5
    },
    {
      name: "Sarah Johnson",
      company: "Digital Solutions",
      position: "Marketing Director",
      review: "Professional, reliable, and innovative. Their team transformed our digital presence completely.",
      star: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      position: "Founder",
      review: "Outstanding results! The quality of work and attention to detail is unmatched in the industry.",
      star: 4
    },
    {
      name: "Sarah Johnson",
      company: "Digital Solutions",
      position: "Marketing Director",
      review: "Professional, reliable, and innovative. Their team transformed our digital presence completely.",
      star: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      position: "Founder",
      review: "Outstanding results! The quality of work and attention to detail is unmatched in the industry.",
      star: 4
    },
     {
      name: "Michael Chen",
      company: "StartupXYZ",
      position: "Founder",
      review: "Outstanding results! The quality of work and attention to detail is unmatched in the industry.",
      star: 4
    }
  ];

  return (
    <section
      id="Testimonial"
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6">
            Love <span className="text-orange-500">Letters...</span>
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