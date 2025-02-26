import React from 'react';
import { Check, Truck, Shield, Wrench, Heart } from 'lucide-react';

const ServiceSolutions = () => {
  const services = [
    {
      icon: <Check size={48} className="text-[#7FA728]" />,
      title: 'Premium Japan Surplus Multicabs',
      description: 'We offer a range of top-tier Japan surplus multicabs that combine reliability, efficiency, and versatility.',
    },
    {
      icon: <Truck size={48} className="text-[#7FA728]" />,
      title: 'Affordable and Competitive Prices',
      description: 'Our prices are carefully set to offer the best value for your money, ensuring affordability without compromising on quality.',
    },
    {
      icon: <Shield size={48} className="text-[#7FA728]" />,
      title: 'Customization Options Tailored to Your Needs',
      description: 'We provide customizable vehicles that can be tailored to suit your preferences, ensuring you get the exact style and features you desire.',
    },
    {
      icon: <Wrench size={48} className="text-[#7FA728]" />,
      title: 'Reliable After-Sales Support',
      description: 'Our commitment to you doesn’t end with the sale. We provide robust after-sales support to ensure your vehicle stays in top condition.',
    },
    {
      icon: <Heart size={48} className="text-[#7FA728]" />,
      title: 'Easy Ownership – Cash or Financing Available',
      description: 'We make it easier for you to own your dream vehicle with both cash and financing options, ensuring that everyone can enjoy the benefits of a quality multicab.',
    },
  ];

  return (
    <section id="Services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold mb-6 transition-all duration-300 ease-in-out transform hover:text-[#7FA728] hover:scale-105">
          Why Choose Highway Motors CamSur?
        </h2>

        {/* Section Description */}
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          At Highway Motors CamSur, we specialize in offering high-quality Japan surplus multicabs and mini-vans that cater to your specific needs. Whether you're seeking a reliable vehicle for business or personal use, we have affordable solutions and customization options to make your driving experience exceptional.
        </p>

        {/* Highlights Section with Moving Text */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#7FA728]">Our Highlights</h3>
          <div className="overflow-hidden whitespace-nowrap">
            <ul className="list-none inline-block animate-marquee">
              <li className="text-lg text-gray-600 inline-block px-4">
                🟢 Premium Japan Surplus Multicabs
              </li>
              <li className="text-lg text-gray-600 inline-block px-4">
                🟢 Affordable and Competitive Prices
              </li>
              <li className="text-lg text-gray-600 inline-block px-4">
                🟢 Customization Options Tailored to Your Needs and Style
              </li>
              <li className="text-lg text-gray-600 inline-block px-4">
                🟢 Reliable After-Sales Support
              </li>
              <li className="text-lg text-gray-600 inline-block px-4">
                🟢 Available for Cash or Financing – Making Ownership Easy and Accessible!
              </li>
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Icon */}
              <div className="mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSolutions;
