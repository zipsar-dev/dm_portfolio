import React from "react";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const COLORS = {
  ACCENT: "#B2E447FF", // main green
  ACCENT_DARK: "#8FBF2A",
  TEXT: "#0b0b0b",
  MUTED: "rgba(11,11,11,0.65)",
  SURFACE: "#FFFFFF"
};

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
      className="py-8 sm:py-12 lg:py-16"
      style={{ background: COLORS.SURFACE }}
    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="w-full lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: COLORS.ACCENT }}
              >
                FORZIC
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.MUTED }}
              >
                We create innovative digital solutions that transform
                businesses and deliver exceptional user experiences through
                cutting-edge technology and creative design.
              </p>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Navigation Links */}
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-4"
                    style={{ color: COLORS.TEXT }}
                  >
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    {navigationLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="transition-colors duration-200 text-sm sm:text-base"
                          style={{ color: COLORS.MUTED }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = COLORS.ACCENT)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = COLORS.MUTED)
                          }
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-4"
                    style={{ color: COLORS.TEXT }}
                  >
                    Contact Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-green-600 flex-shrink-0" />
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: COLORS.MUTED }}
                      >
                        FORZIC Digital <br />
                        AIC Raise Business Incubator
                        Coimbatore, Madukkarai, Tamil Nadu – 641021
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <a
                        href="tel:+1234567890"
                        className="transition-colors duration-200 text-sm sm:text-base"
                        style={{ color: COLORS.MUTED }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = COLORS.ACCENT)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = COLORS.MUTED)
                        }
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <a
                        href="mailto:info@forzic.com"
                        className="transition-colors duration-200 text-sm sm:text-base"
                        style={{ color: COLORS.MUTED }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = COLORS.ACCENT)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = COLORS.MUTED)
                        }
                      >
                        info@forzic.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-4"
                    style={{ color: COLORS.TEXT }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex gap-4 flex-wrap">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                          style={{
                            backgroundColor: "#f3fdf0",
                            border: `1px solid ${COLORS.ACCENT}`,
                          }}
                        >
                          <Icon
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            style={{ color: COLORS.ACCENT }}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div
            className="pt-6 sm:pt-8 border-t"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm sm:text-base" style={{ color: COLORS.MUTED }}>
                © {currentYear} FORZIC. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm sm:text-base">
                <a
                  href="#privacy"
                  style={{ color: COLORS.MUTED }}
                  className="transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.ACCENT)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.MUTED)
                  }
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  style={{ color: COLORS.MUTED }}
                  className="transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.ACCENT)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.MUTED)
                  }
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
