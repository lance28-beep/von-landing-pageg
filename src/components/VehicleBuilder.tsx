import React, { useEffect, useRef } from 'react';

const VehicleBuilder = () => {
  const statsRef = useRef<HTMLDivElement>(null);

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
            const counters = document.querySelectorAll('.counter');
            counters.forEach((counter) => {
              const target = parseFloat(counter.getAttribute('data-target') || '0');
              const suffix = counter.getAttribute('data-suffix') || '';
              let count = 0;
              const updateCount = () => {
                const increment = target / 50;
                if (count < target) {
                  count += increment;
                  (counter as HTMLElement).innerText =
                    target % 1 === 0
                      ? Math.ceil(count) + suffix
                      : count.toFixed(1) + suffix;
                  setTimeout(updateCount, 20);
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 transition-all duration-300 ease-in-out transform hover:text-[#A4D037] hover:scale-105">
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With years of experience, we provide high-quality, reliable, and affordable Japan surplus
            vehicles. Join thousands of satisfied customers who trust us for their transportation
            needs.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <div
                className="counter text-4xl font-bold text-[#A4D037] mb-2"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Message Us Today Section */}
        <div className="text-center bg-[#A4D037] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Message Us Today!</h3>
          <p className="text-white mb-6">
            Have questions or need assistance? Reach out to us directly on Messenger or visit our
            contact page. We're here to help!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://m.me/mr.c0oletz" // Replace with your Messenger link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#A4D037] px-8 py-3 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              Chat on Messenger
            </a>
            <a
              href="#Contact" // Replace with your contact page link
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#A4D037] transform hover:scale-105 transition-all"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleBuilder;