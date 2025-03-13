import React from 'react';
import { Car, DollarSign, Palette, Headphones, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceSolutions = () => {
  const services = [
    {
      icon: <Car size={28} className="text-white" />,
      title: 'Premium Japan Surplus Multicabs',
      description: 'We offer a range of top-tier Japan surplus multicabs that combine reliability, efficiency, and versatility.',
      features: ['Quality Assured', 'Japanese Engineering', 'Proven Reliability']
    },
    {
      icon: <DollarSign size={28} className="text-white" />,
      title: 'Affordable and Competitive Prices',
      description: 'Our prices are carefully set to offer the best value for your money, ensuring affordability without compromising on quality.',
      features: ['Competitive Pricing', 'Value for Money', 'Flexible Payment Plans']
    },
    {
      icon: <Palette size={28} className="text-white" />,
      title: 'Customization Options',
      description: 'We provide customizable vehicles that can be tailored to suit your preferences, ensuring you get the exact style and features you desire.',
      features: ['Custom Paint Jobs', 'Interior Upgrades', 'Feature Add-ons']
    },
    {
      icon: <Headphones size={28} className="text-white" />,
      title: 'Reliable After-Sales Support',
      description: "Our commitment to you doesn't end with the sale. We provide robust after-sales support to ensure your vehicle stays in top condition.",
      features: ['24/7 Support', 'Regular Maintenance', 'Genuine Parts']
    },
    {
      icon: <CreditCard size={28} className="text-white" />,
      title: 'Easy Ownership Options',
      description: 'We make it easier for you to own your dream vehicle with both cash and financing options, ensuring that everyone can enjoy the benefits of a quality multicab.',
      features: ['Cash Purchase', 'Financing Available', 'Quick Approval']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="Services" className="py-24 relative overflow-hidden">
      {/* Modern Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#7FA728] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#A4D037] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-[#7FA728] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-[#7FA728] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-white">
            Why Choose Highway Motors CamSur?
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#7FA728] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience excellence with our premium Japan surplus multicabs and mini-vans, 
            backed by unmatched service quality and customer satisfaction.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "100%", label: "Quality Assured" },
            { number: "24/7", label: "Customer Support" },
            { number: "10+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 backdrop-blur-lg bg-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group relative overflow-hidden"
            >
              {/* Light circling effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
              <div className="relative">
                <h3 className="text-4xl font-bold text-[#7FA728] mb-3">{stat.number}</h3>
                <p className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 relative overflow-hidden"
            >
              {/* Light circling effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
              
              {/* Icon container with enhanced hover effect */}
              <div className="relative mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r  rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#7FA728] to-[#A4D037] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#7FA728] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300 group-hover:text-white transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-[#7FA728] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSolutions;
