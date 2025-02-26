import React from 'react';
import { Link } from 'react-scroll';
import heroBackground from '../components/img/High Wayt Motors CamSur Mini Van & MultiCab Surplus.jpg';

const Hero = () => {
  return (
    <section id="Menu" className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Mini Van and Multi-Cab Japan Surplus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center md:text-left">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Drive Home Your </span>
            <span className="text-[#A4D037]">Mini Van & Multi-Cab</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-white text-xl mb-8">
            🚗 **Starting at Just ₱250K!** Get top-quality Japan surplus multicabs at unbeatable prices.  
            Cash or flexible financing options available!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link 
              to="collection" 
              smooth={true} 
              duration={800} 
              offset={-100} // Adjusts scrolling position
              className="bg-[#A4D037] text-black px-8 py-3 rounded-lg hover:bg-[#A4D037] transform hover:scale-105 transition-all font-semibold cursor-pointer"
            >
              View Available Models
            </Link>
            <Link 
              to="Contact" 
              smooth={true} 
              duration={800} 
              offset={-100} 
              className="bg-transparent border-2 border-[#A4D037] text-white px-8 py-3 rounded-lg hover:bg-[#A4D037] hover:text-black transform hover:scale-105 transition-all font-semibold cursor-pointer"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Messenger Link */}
          <p className="text-white text-sm mt-6">
            📩 **Have questions?** Message us on{' '}
            <a
              href="https://m.me/mr.c0oletz" // Replace with your Messenger link
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-[#A4D037] transition-all"
            >
              Messenger
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
