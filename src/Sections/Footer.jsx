import React from "react";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Service", href: "#Service" },
    { name: "Project", href: "#Project" },
    { name: "Testimonial", href: "#Testimonial" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section
      id="Footer"
      className="bg-orange-400 text-white py-8 sm:py-12 lg:py-16"
    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - 80% width on desktop */}
        <div className="w-full lg:w-[80%] mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">
            {/* Left Side - Logo and Description (30% of space) */}
            <div className="lg:col-span-4">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  FORZIC
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  We create innovative digital solutions that transform
                  businesses and deliver exceptional user experiences through
                  cutting-edge technology and creative design.
                </p>
              </div>
            </div>

            {/* Right Side Content (70% of space) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Navigation Links */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    {navigationLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Contact Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-white/80 flex-shrink-0" />
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        FORZIC Digital <br />
                        AIC Raise Business Incubator
                        Coimbatore, Madukkarai, Tamil Nadu – 641021
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 flex-shrink-0" />
                      <a
                        href="tel:+1234567890"
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 flex-shrink-0" />
                      <a
                        href="mailto:info@yourcompany.com"
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        info@forzic.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="pt-6 sm:pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-white/80 text-sm sm:text-base">
                  © {currentYear} forzic. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6 text-sm sm:text-base">
                <a
                  href="#privacy"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
