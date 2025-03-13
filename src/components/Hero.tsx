import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import heroBackground from '../components/img/High Wayt Motors CamSur Mini Van & MultiCab Surplus.jpg';

const Hero = () => {
  return (
    <section id="Menu" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src={heroBackground}
          alt="Mini Van and Multi-Cab Japan Surplus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-block bg-[#A4D037]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#A4D037] font-semibold">🌟 Premium Japan Surplus</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Drive Home Your Dream
            </motion.span>
            <motion.span 
              className="block text-[#A4D037]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Mini Van & Multi-Cab
            </motion.span>
          </h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-gray-200 text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Starting at just ₱250K! Experience premium quality Japan surplus vehicles 
            with flexible financing options tailored to your needs.
          </motion.p>

          {/* Features List */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: "✨", text: "Quality Assured" },
              { icon: "🔧", text: "Full Warranty" },
              { icon: "💰", text: "Flexible Payment" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-white">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link 
              to="collection" 
              smooth={true} 
              duration={800} 
              offset={-100}
              className="bg-[#A4D037] text-black px-8 py-4 rounded-lg hover:bg-[#8fb22f] transform hover:scale-105 transition-all font-semibold cursor-pointer shadow-lg shadow-[#A4D037]/20"
            >
              View Available Models
            </Link>
            <Link 
              to="Contact" 
              smooth={true} 
              duration={800} 
              offset={-100} 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all font-semibold cursor-pointer"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          {/* Messenger Link */}
          <motion.p 
            className="text-white/80 text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Have questions? Chat with us on{' '}
            <a
              href="https://m.me/mr.c0oletz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#A4D037] hover:underline transition-all"
            >
              Messenger
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
