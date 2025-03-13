import React, { useEffect, useRef, useState } from 'react';
import VehicleShowcase from "./vehicle-showcase"

const VehicleBuilder = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const stats = [
    { label: 'Cars Sold', value: 1500, suffix: '+' },
    { label: 'Customer Satisfaction', value: 95, suffix: '%' },
    { label: '5-Star Ratings', value: 4.9, suffix: '/5' },
    { label: 'Years of Experience', value: 15, suffix: '+' },
    { label: 'Repeat Customers', value: 80, suffix: '%' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoading(false);
            const counters = document.querySelectorAll('.counter');
            counters.forEach((counter) => {
              const target = parseFloat(counter.getAttribute('data-target') || '0');
              const suffix = counter.getAttribute('data-suffix') || '';
              let count = 0;
              const updateCount = () => {
                const increment = target / 50;
                if (count < target) {
                  count += increment;
                  requestAnimationFrame(() => {
                    (counter as HTMLElement).innerText =
                      target % 1 === 0
                        ? Math.ceil(count) + suffix
                        : count.toFixed(1) + suffix;
                    updateCount();
                  });
                } else {
                  (counter as HTMLElement).innerText = target + suffix;
                }
              };
              updateCount();
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" role="region" aria-label="Vehicle Builder Section">
      {/* Animated gradient background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#A4D037]/10 via-white to-[#A4D037]/5 animate-gradient-x"
        style={{
          transform: 'translateZ(-1px) scale(2)',
          willChange: 'transform'
        }}
      ></div>
      
      {/* Background pattern with reduced motion */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(#A4D037 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#A4D037] to-[#2C5282] transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-[#2C5282] hover:to-[#A4D037]">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed hover:text-[#A4D037] transition-colors duration-300">
            With years of experience, we provide high-quality, reliable, and affordable Japan surplus
            vehicles. Join thousands of satisfied customers who trust us for their transportation
            needs.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
          role="list"
          aria-label="Statistics"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A4D037]/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-md bg-white/70 rounded-2xl p-8 shadow-lg border border-white/20 hover:border-[#A4D037]/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div
                    className={`counter text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A4D037] to-[#2C5282] mb-3 group-hover:from-[#2C5282] group-hover:to-[#A4D037] transition-all duration-300 ${isLoading ? 'animate-pulse' : ''}`}
                    data-target={stat.value}
                    data-suffix={stat.suffix}
                    aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}
                  >
                    0{stat.suffix}
                  </div>
                  <p className="text-gray-700 font-medium group-hover:text-[#A4D037] transition-colors duration-300">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Us Today Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A4D037] to-[#2C5282] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative backdrop-blur-md bg-white/90 rounded-2xl p-12 shadow-xl border border-white/20">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-[#A4D037] transition-colors duration-300">Message Us Today!</h3>
              <p className="text-gray-600 mb-8 text-lg group-hover:text-gray-700 transition-colors duration-300">
                Have questions or need assistance? Reach out to us directly on Messenger or visit our
                contact page. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://m.me/mr.c0oletz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-[#0084FF] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#0073E6] transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Chat with us on Messenger"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  Chat on Messenger
                </a>
                <a
                  href="#Contact"
                  className="px-8 py-4 rounded-xl bg-white text-[#A4D037] font-medium border-2 border-[#A4D037] hover:bg-[#A4D037] hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Contact us through our contact form"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle showcase */}
        <div className="mt-16">
          <VehicleShowcase />
        </div>
      </div>
    </section>
  );
};

export default VehicleBuilder;