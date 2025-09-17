import { ChartColumnIncreasing, Component, Lightbulb, PenTool } from "lucide-react";
import AboutCard from "../Components/Card/AboutCard";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen flex justify-center items-center flex-col py-8 px-4"
    >
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center gap-2">
          Our <span style={{ color: "#B2E447FF" }}>Vibe..</span>
          <img src="/Images/sparkle.png" alt="" className="w-10" />
        </h1>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between mx-auto mt-6 lg:mt-10 gap-8 lg:gap-12">
        <div className="w-full lg:w-[48%]">
          <img
            src="/Images/about.png"
            alt="About Image"
            className="w-full h-auto max-h-[400px] lg:max-h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full lg:w-[48%]">
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
        <AboutCard
          title="Creative & Bold Strategies"
          description="Tailored strategies that help your brand stand out and grow with impact."
          icon={<PenTool color="#B2E447FF" />}
        />
        <AboutCard
          title="Designs That Stand Out"
          description="Compelling visuals that reflect your identity and engage your audience."
          icon={<Component color="#B2E447FF" />}
        />
        <AboutCard
          title="Data-Driven Decisions"
          description="Campaigns optimized through insights and measurable performance metrics."
          icon={<ChartColumnIncreasing color="#B2E447FF" />}
        />
        <AboutCard
          title="Innovation at Every Step"
          description="Fresh ideas and modern tools to keep your brand ahead of the curve."
          icon={<Lightbulb color="#B2E447FF" />}
        />
      </div>
    </section>
  );
};

export default About;
