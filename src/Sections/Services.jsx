import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ServiceCard from "../Components/Card/ServiceCard";

const Services = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Services data object
  const servicesData = [
    {
      id: 1,
      title: "Market Research",
      desc: "Deep-dive into your market landscape to uncover hidden opportunities and understand your customers' true needs and behaviors.",
      image: "/Images/Services/market_research.png"
    },
    {
      id: 2,
      title: "Strategy Development",
      desc: "Transform insights into actionable roadmaps that align your business goals with market realities for sustainable growth.",
      image: "/Images/Services/strategy_development.jpg"
    },
    {
      id: 3,
      title: "Business Strategy",
      desc: "Build comprehensive business frameworks that position you ahead of competitors and drive long-term success.",
      image: "/Images/Services/business_stratergy.jpg"
    },
    {
      id: 4,
      title: "Performance and Market Analysis",
      desc: "Turn data into decisions with detailed analytics that reveal what's working, what's not, and where to focus next.",
      image: "/Images/Services/performance_and_market_analysis.jpg"
    },
    {
      id: 5,
      title: "Brand Positioning",
      desc: "Carve out your unique space in the market with positioning that makes your brand memorable and irresistible.",
      image: "/Images/Services/Brand_position.jpg"
    },
    {
      id: 6,
      title: "Website Development",
      desc: "Create stunning, high-performance websites that convert visitors into customers and reflect your brand's personality.",
      image: "/Images/Services/website_development.jpg"
    },
    {
      id: 7,
      title: "SEO",
      desc: "Dominate search results with strategic optimization that drives organic traffic and puts you ahead of the competition.",
      image: "/Images/Services/SEO.webp"
    },
    {
      id: 8,
      title: "SMM",
      desc: "Build communities, spark conversations, and turn social platforms into powerful engines for brand growth and engagement.",
      image: "/Images/Services/SMM.png"
    },
    {
      id: 9,
      title: "Video Production & Content Marketing",
      desc: "Tell your story through compelling visuals and content that captivates audiences and drives meaningful action.",
      image: "/Images/Services/video_production.jpg"
    },
    {
      id: 10,
      title: "Logo & Graphic Design",
      desc: "Design visual identities that speak volumes about your brand and leave lasting impressions on every customer touchpoint.",
      image: "/Images/Services/graphic_design.jpg"
    },
    {
      id: 11,
      title: "Event Marketing",
      desc: "Create unforgettable experiences that bring your brand to life and forge deeper connections with your audience.",
      image: "/Images/Services/event-marketing.jpg"
    },
    {
      id: 12,
      title: "Influencer Marketing",
      desc: "Leverage authentic voices to amplify your message and reach new audiences through trusted recommendations.",
      image: "/Images/Services/influencer.jpg"
    },
    {
      id: 13,
      title: "Email Marketing",
      desc: "Nurture relationships and drive conversions with personalized campaigns that land in inboxes and hearts alike.",
      image: "/Images/Services/email_marketing.webp"
    },
    {
      id: 14,
      title: "Funnel Marketing",
      desc: "Guide prospects through seamless customer journeys that convert interest into sales with precision and efficiency.",
      image: "/Images/Services/funnel.webp"
    },
    {
      id: 15,
      title: "PR & Online Reputation Management",
      desc: "Shape public perception and protect your brand's reputation while building trust and credibility in the digital space.",
      image: "/Images/Services/PR.png"
    },
    {
      id: 16,
      title: "SEM",
      desc: "Maximize your search visibility with targeted paid campaigns that deliver immediate results and qualified leads.",
      image: "/Images/Services/SEM.png"
    },
    {
      id: 17,
      title: "Advertising",
      desc: "Create compelling ad campaigns across multiple channels that grab attention and drive measurable business results.",
      image: "/Images/Services/advertising.jpg"
    },
    {
      id: 18,
      title: "Analytics",
      desc: "Decode complex data patterns to provide actionable insights that fuel smarter decisions and better outcomes.",
      image: "/Images/Services/analytics.png"
    },
    {
      id: 19,
      title: "CRM Solution",
      desc: "Streamline customer relationships with powerful systems that enhance service delivery and drive retention.",
      image: "/Images/Services/CRM.png"
    },
    {
      id: 20,
      title: "UI/UX Design",
      desc: "Design intuitive digital experiences that delight users and seamlessly guide them toward their goals.",
      image: "/Images/Services/uiux.jpg"
    },
    {
      id: 21,
      title: "Web App Development",
      desc: "Build robust web applications that solve real problems and deliver exceptional user experiences across all devices.",
      image: "/Images/Services/website_development.jpg"
    },
    {
      id: 22,
      title: "Mobile App Development",
      desc: "Transform ideas into powerful mobile solutions that engage users and drive business growth on-the-go.",
      image: "/Images/Services/mobile.webp"
    }
  ];

  // Duplicate services for seamless loop
  const duplicatedServices = [...servicesData, ...servicesData];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 320; // Base card width
    const gap = 24; 
    const singleSetWidth = servicesData.length * (cardWidth + gap);

    animationRef.current = gsap.to(scrollContainer, {
      x: -singleSetWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    const handleMouseEnter = () => {
      if (animationRef.current) animationRef.current.pause();
    };

    const handleMouseLeave = () => {
      if (animationRef.current) animationRef.current.resume();
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) animationRef.current.kill();
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [servicesData.length]);

  return (
    <section
      id="Services"
      className="min-h-[70vh] flex justify-center items-center flex-col py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 flex items-center gap-3">
          Digital <span style={{ color: "#B2E447FF" }}>Magic...</span>
          <img src="/Images/sparkle.png" alt="" className="w-10"/>
        </h1>
        <p className="text-zinc-700/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
          We sprinkle creativity with strategy to make your brand impossible to
          ignore.
        </p>
      </div>

      {/* Infinite Scrolling Services */}
      <div className="w-full max-w-none relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 items-center"
          style={{ 
            width: 'max-content',
            willChange: 'transform'
          }}
        >
          {duplicatedServices.map((service, index) => (
            <div key={`${service.id}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[300px] lg:w-[320px]">
              <ServiceCard 
                title={service.title}
                desc={service.desc}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
