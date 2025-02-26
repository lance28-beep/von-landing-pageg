import React from "react";
import { FaFacebook,FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Highway Motors CamSur</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for Japan surplus vehicles, offering reliable and affordable options for all.
            </p>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61572950004086" target="_blank" className="hover:text-[#A4D037] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/vallelance" target="_blank" className="hover:text-[#A4D037] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com/lance28-beep" target="_blank" className="hover:text-[#A4D037] transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/rolando_va52047" target="_blank" className="hover:text-[#A4D037] transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="hover:text-[#A4D037] transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" className="hover:text-[#A4D037] transition-colors">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link to="hero" smooth={true} duration={500} className="text-gray-400 hover:text-[#A4D037] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="serviceSolutions" smooth={true} duration={500} className="text-gray-400 hover:text-[#A4D037] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="carCollection" smooth={true} duration={500} className="text-gray-400 hover:text-[#A4D037] transition-colors">
                  Car Collection
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} duration={500} className="text-gray-400 hover:text-[#A4D037] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="contactForm" smooth={true} duration={500} className="text-gray-400 hover:text-[#A4D037] transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiMapPin size={20} className="mr-2 text-[#A4D037]" />
                <span className="text-gray-400">Anayan, Pili, Camarines Sur, 4418 Philippines</span>
              </li>
              <li className="flex items-center">
                <FiPhone size={20} className="mr-2 text-[#A4D037]" />
                <span className="text-gray-400">+63 912 345 6789</span>
              </li>
              <li className="flex items-center">
                <FiMail size={20} className="mr-2 text-[#A4D037]" />
                <span className="text-gray-400">info@highwaymotors.com</span>
              </li>
            </ul>
          </div>

          {/* Developer Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Developer</h4>
            <p className="text-gray-400 mb-4">
              Site developed by{" "}
              <a href="https://lance28-beep.github.io/portfolio-website" target="_blank" className="text-[#A4D037] hover:underline">
                Lance Valle
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Highway Motors CamSur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
