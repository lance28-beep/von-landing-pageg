import React, { useEffect, useRef } from 'react';
import nissanLogo from './img/Nissan_Logo.png'; // Import your brand logos
import ruscoLogo from './img/Rusco_Logo.jpg';
import suzukiLogo from './img/Suzuki_Motor_Corporation_logo.png';
import mitsubishiLogo from './img/mitsubishi_motors_logo.png';

const BrandPartners = () => {
  // Define your brands with imported logos
  const brands = [
    { name: 'Nissan', logo: nissanLogo },
    { name: 'Rusco', logo: ruscoLogo },
    { name: 'Suzuki', logo: suzukiLogo },
    { name: 'Mitsubishi', logo: mitsubishiLogo },
  ];

  // Explicitly type the ref as HTMLDivElement
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      // Check if the scroll has reached the start
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2; // Reset scroll position to the middle
      } else {
        scrollContainer.scrollLeft -= 1; // Scroll to the left
      }
    };

    const interval = setInterval(scroll, 30); // Adjust scroll speed here
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
<h2 className="text-center text-3xl font-bold mb-12 transition-all duration-300 ease-in-out transform hover:text-[#A4D037] hover:scale-105">
  Our Car Brands
</h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden whitespace-nowrap"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%)' }}
        >
          {/* Duplicate brands for seamless infinite scroll */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-8 transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;