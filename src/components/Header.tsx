import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="relative flex items-center justify-center">
            <div
              className={`transition-colors duration-300 text-xl md:text-2xl font-bold relative flex items-center ${
                isScrolled ? 'text-gray-800' : 'text-[#A4D037]'
              }`}
            >
              {/* Icon or Graphic Element */}
              <div className="mr-2">
                {/* Replace with your icon or graphic */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-lg md:text-xl">Highway Motors CamSur</h1>
                <p className="text-sm md:text-base font-semibold">
                  /minivan-multicab surplus/
                </p>
              </div>
              {/* Moving Circular Border */}
              <div
                className={`absolute inset-0 border-2 ${
                  isScrolled ? 'border-gray-800' : 'border-[#A4D037]'
                } rounded-full animate-border`}
                style={{
                  width: '130%',
                  height: '130%',
                  top: '-15%',
                  left: '-15%',
                  borderTopColor: 'transparent',
                  borderLeftColor: 'transparent',
                }}
              ></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-[#A4D037]' : 'text-white hover:text-[#A4D037]'
              }`}
            >
              Menu
            </Link>
            <Link
              to="serviceSolutions"
              smooth={true}
              duration={500}
              className={`text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-[#A4D037]' : 'text-white hover:text-[#A4D037]'
              }`}
            >
              Services
            </Link>
            <Link
              to="carCollection"
              smooth={true}
              duration={500}
              className={`text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-[#A4D037]' : 'text-white hover:text-[#A4D037]'
              }`}
            >
              Collection
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className={`text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-[#A4D037]' : 'text-white hover:text-[#A4D037]'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="contactForm"
              smooth={true}
              duration={500}
              className={`text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-[#A4D037]' : 'text-white hover:text-[#A4D037]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-[#A4D037] px-4 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="serviceSolutions"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-[#A4D037] px-4 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="carCollection"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-[#A4D037] px-4 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-[#A4D037] px-4 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="contactForm"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-[#A4D037] px-4 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
