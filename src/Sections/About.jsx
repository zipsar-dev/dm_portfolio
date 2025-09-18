import React, { useEffect, useRef } from "react";
import { ChartColumnIncreasing, Component, Lightbulb, PenTool } from "lucide-react";
import AboutCard from "../Components/Card/AboutCard";

const About = () => {
  const containerRef = useRef(null);
  const animatedElsRef = useRef([]);

  useEffect(() => {
    animatedElsRef.current = Array.from(
      containerRef.current?.querySelectorAll("[data-animate]") || []
    );

    if (!("IntersectionObserver" in window)) {
      // fallback: add in-view immediately
      animatedElsRef.current.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // if you want one-time animation, unobserve after first intersection:
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    animatedElsRef.current.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section
      id="About"
      className="min-h-screen flex justify-center items-center flex-col py-8 px-4"
      ref={containerRef}
    >
      <div className="text-center mb-8">
        <h1
          data-animate
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center gap-2 opacity-0 transform translate-y-6"
        >
          Our <span style={{ color: "#B2E447FF" }}>Vibe..</span>
          <img src="/Images/sparkle.png" alt="" className="w-10" />
        </h1>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between mx-auto mt-6 lg:mt-10 gap-8 lg:gap-12">
        <div
          data-animate
          className="w-full lg:w-[48%] opacity-0 transform translate-y-6"
          style={{ transitionDelay: "0.12s" }}
        >
          <img
            src="/Images/about.png"
            alt="About Image"
            className="w-full h-auto max-h-[400px] lg:max-h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div
          data-animate
          className="w-full lg:w-[48%] opacity-0 transform translate-y-6"
          style={{ transitionDelay: "0.18s" }}
        >
          <p className="text-sm leading-relaxed text-gray-700">
            We are a passionate team of digital marketing professionals who
            believe that great brands are built at the intersection of
            creativity, strategy, and technology. Our journey started with a
            simple vision: to help businesses stand out in the crowded digital
            landscape by combining innovative ideas with measurable results.
            <br />
            <br />
            At our core, we are more than just marketers — we are storytellers,
            designers, analysts, and problem solvers. Every campaign we create
            is tailored to reflect your brand's unique identity, while staying
            aligned with your long-term business goals. We understand that
            digital marketing is not just about ads or posts, but about creating
            meaningful connections with your audience.
            <br />
            <br />
            Our strength lies in blending creativity with data-driven
            decision-making. From building visually striking campaigns to
            optimizing them for performance, we ensure that every step delivers
            value. Whether it's growing your online presence, generating leads,
            or increasing engagement, we focus on strategies that bring real,
            lasting results.
            <br />
            <br />
            Above all, we believe in transparency, collaboration, and trust.
            When you work with us, you gain a partner who is as invested in your
            success as you are. Together, we'll transform ideas into impact and
            make your brand truly unforgettable.
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-16 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          {
            title: "Creative & Bold Strategies",
            description:
              "Tailored strategies that help your brand stand out and grow with impact.",
            icon: <PenTool color="#B2E447FF" />,
          },
          {
            title: "Designs That Stand Out",
            description:
              "Compelling visuals that reflect your identity and engage your audience.",
            icon: <Component color="#B2E447FF" />,
          },
          {
            title: "Data-Driven Decisions",
            description:
              "Campaigns optimized through insights and measurable performance metrics.",
            icon: <ChartColumnIncreasing color="#B2E447FF" />,
          },
          {
            title: "Innovation at Every Step",
            description:
              "Fresh ideas and modern tools to keep your brand ahead of the curve.",
            icon: <Lightbulb color="#B2E447FF" />,
          },
        ].map((card, idx) => (
          <div
            key={card.title}
            data-animate
            style={{ transitionDelay: `${0.18 + idx * 0.08}s` }}
            className="opacity-0 transform translate-y-6"
          >
            <AboutCard
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </div>
        ))}
      </div>

      {/* Inline animation CSS — move to global CSS if you prefer */}
      <style>{`
        [data-animate] {
          transition: opacity 560ms cubic-bezier(.2,.9,.3,1), transform 560ms cubic-bezier(.2,.9,.3,1);
          will-change: opacity, transform;
        }
        [data-animate].in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* subtle pop for cards when they appear */
        [data-animate].in-view > * {
          transition: transform 420ms ease, box-shadow 420ms ease;
        }
        /* Slight hover lift for cards (assuming AboutCard has a container) */
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(15,23,42,0.08);
        }

        /* optional: reduce motion preferences */
        @media (prefers-reduced-motion: reduce) {
          [data-animate] { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
