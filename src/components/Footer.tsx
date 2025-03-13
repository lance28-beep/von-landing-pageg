import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaTiktok, FaWhatsapp, FaPhoneAlt, FaClock } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    quickLinks: [
      { name: "Home", to: "hero" },
      { name: "Services", to: "serviceSolutions" },
      { name: "Car Collection", to: "carCollection" },
      { name: "Vehicle Builder", to: "vehicleBuilder" },
      { name: "Testimonials", to: "testimonials" },
      { name: "Contact", to: "contactForm" },
      { name: "Locations", to: "locationMap" },
    ],
    services: [
      "Japan Surplus Vehicles",
      "Vehicle Financing",
      "Trade-In Options",
      "Vehicle Inspection",
      "After-Sales Support",
      "Documentation Assistance",
    ],
    vehicles: [
      "Toyota HiAce",
      "Mitsubishi L300",
      "Suzuki Multi-Cab",
      "Nissan Urvan",
      "Toyota Coaster",
      "Isuzu Elf",
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#a4d037]/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a4d037]/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#a4d037]">Highway Motors CamSur</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for premium Japan surplus vehicles. We offer reliable and affordable options with exceptional service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572950004086"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#a4d037] hover:text-white transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/vallelance"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#a4d037] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com/rolando_va52047"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#a4d037] hover:text-white transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://wa.me/639123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#a4d037] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerSections.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-[#a4d037] transition-colors cursor-pointer inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {footerSections.services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-[#a4d037] transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <HiLocationMarker className="w-6 h-6 text-[#a4d037] mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 hover:text-[#a4d037] transition-colors">
                  Anayan, Pili, Camarines Sur, 4418 Philippines
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <FaPhoneAlt className="w-5 h-5 text-[#a4d037] group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 hover:text-[#a4d037] transition-colors">
                  +63 912 345 6789
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <HiMail className="w-6 h-6 text-[#a4d037] group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 hover:text-[#a4d037] transition-colors">
                  info@highwaymotors.com
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <FaClock className="w-5 h-5 text-[#a4d037] group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 hover:text-[#a4d037] transition-colors">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Highway Motors CamSur. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                Developed by{" "}
                <a
                  href="https://lance28-beep.github.io/portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a4d037] hover:underline"
                >
                  Lance Valle
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
