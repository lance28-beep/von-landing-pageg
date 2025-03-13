import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'serviceSolutions' },
    { name: 'Collection', to: 'carCollection' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contactForm' },
  ];

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex flex-col text-white">
                <h1 className="text-2xl md:text-3xl font-bold animate-glow">
                  Highway Motors CamSur
                </h1>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#A4D037] transition-all duration-300" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-[#A4D037]"
                className={`relative text-lg font-medium cursor-pointer nav-item-hover px-4 py-2 rounded-lg transition-all duration-300 
                  text-white hover:text-[#A4D037]
                  ${activeSection === item.to ? 'text-[#A4D037]' : ''}
                `}
                onSetActive={() => setActiveSection(item.to)}
              >
                {item.name}
                {activeSection === item.to && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A4D037]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden mt-4"
            >
              <nav className="bg-black/90 backdrop-blur-md rounded-2xl p-4 space-y-2 border border-white/10">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                      activeSection === item.to
                        ? 'bg-[#A4D037]/20 text-[#A4D037]'
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSection(item.to);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
