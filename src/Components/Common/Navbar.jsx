/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Menu,
  X,
  Home,
  User,
  Settings,
  Briefcase,
  MessageSquare,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: Home, to: "Home" },
    { name: "About", icon: User, to: "About" },
    { name: "Services", icon: Settings, to: "Services" },
    { name: "Project", icon: Briefcase, to: "Project" },
    { name: "Testimonial", icon: MessageSquare, to: "Testimonial" },
    { name: "Contact", icon: Phone, to: "Footer" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Home",
        "About",
        "Services",
        "Project",
        "Testimonial",
        "Footer",
      ];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // glossy pill style (uses #CBF476). Keep text color unchanged.
  const glossyStyle = {
    background:
      "linear-gradient(180deg, rgba(203,244,118,0.22), rgba(203,244,118,0.12))",
    border: "1px solid rgba(203,244,118,0.35)",
    boxShadow: "0 8px 18px rgba(203,244,118,0.12)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
  };

  return (
    <div className="w-full flex justify-center items-center mt-5 px-4 sticky top-8 z-50">
      <div
        className="w-full max-w-6xl h-17 flex justify-center items-center text-black rounded-[50px] lg:rounded-[80px] relative overflow-visible py-1 lg:py-2"
        style={{
          background: "rgba(255, 255, 255, 0.15)", // more transparent
          backdropFilter: "blur(20px) saturate(180%)", // strong glass effect
          WebkitBackdropFilter: "blur(20px) saturate(180%)", // Safari support
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Glassy overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-[50px] lg:rounded-[80px] pointer-events-none"></div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-[85%] justify-between items-center px-6 relative z-10">
          {["Home", "About", "Services"].map((item, idx) => {
            const isActive = activeSection === item;
            return (
              <Link
                key={idx}
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                className={`flex items-center gap-2 cursor-pointer transition-all duration-300 px-3 py-2 rounded-full ${
                  isActive ? "scale-[1.03]" : "hover:scale-105"
                }`}
                style={isActive ? glossyStyle : {}}
              >
                <span className="font-medium text-sm text-gray-900">
                  {item}
                </span>
              </Link>
            );
          })}

          <h1 className="font-bold text-xl text-gray-900 flex items-center">
            <a href="/" aria-label="FORZIC — Home" className="inline-block">
              <img
                src="public/forziclogo.svg"
                alt="FORZIC logo"
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
            </a>
          </h1>

          {["Project", "Testimonial", "Footer"].map((item, idx) => {
            const display = item === "Footer" ? "Contact" : item;
            const isActive = activeSection === item;
            return (
              <Link
                key={idx}
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                className={`flex items-center gap-2 cursor-pointer transition-all duration-300 px-3 py-2 rounded-full ${
                  isActive ? "scale-[1.03]" : "hover:scale-105"
                }`}
                style={isActive ? glossyStyle : {}}
              >
                <span className="font-medium text-sm text-gray-900">
                  {display}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div
          className="lg:hidden w-full flex justify-between items-center px-6 relative z-10 rounded-full"
          style={{
            // switched from transparent to a subtle blur glass for mobile top bar
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(12px) saturate(140%)",
            WebkitBackdropFilter: "blur(12px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h1 className="font-bold text-xl text-gray-900">FORZIC</h1>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm text-gray-800 hover:text-orange-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl shadow-2xl py-4 z-50 overflow-hidden animate-slideDown"
            style={{
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(18px) saturate(900%)",
              WebkitBackdropFilter: "blur(18px) saturate(900%)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/10 rounded-2xl pointer-events-none"></div>

            <div className="flex flex-col space-y-2 px-4 relative z-10">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isLast = index === navItems.length - 1;
                const isActive = activeSection === item.to;

                if (isLast) {
                  // Contact / Footer - scroll to footer element if present
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-gray-800 ${
                        isActive ? "" : ""
                      }`}
                      onClick={() => {
                        const footerEl = document.getElementById("Footer");
                        if (footerEl) {
                          footerEl.scrollIntoView({ behavior: "smooth", block: "end" });
                        } else {
                          window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: "smooth",
                          });
                        }
                        setIsOpen(false);
                      }}
                      style={isActive ? glossyStyle : {}}
                    >
                      <IconComponent size={18} className="text-gray-800" />
                      <span className="font-medium text-gray-900">
                        {item.name}
                      </span>
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    to={item?.to}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    spy={false}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-gray-800 hover:bg-white/10 ${
                      isActive ? "" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={isActive ? glossyStyle : {}}
                  >
                    <IconComponent size={18} className="text-gray-800" />
                    <span className="font-medium text-gray-900">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.2s ease-out; }
      `}</style>
    </div>
  );
};

export default Navbar;
