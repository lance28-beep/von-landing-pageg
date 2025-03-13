import React, { useEffect, useState } from 'react';
import customer from './img/customer_1.jpg';

const Collection = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: customer,
      title: 'Suzuki Every Mini Van',
      description: 'Sold to John Doe',
      testimonial: '"The perfect vehicle for my small business. The team made the whole process seamless!"',
      date: 'March 2024',
      price: '$12,500'
    },
    {
      id: 2,
      image: customer,
      title: 'Toyota Multi Cab',
      description: 'Sold to Jane Smith',
      testimonial: '"Excellent service and the vehicle exceeded my expectations. Highly recommended!"',
      date: 'April 2024',
      price: '$15,200'
    },
    {
      id: 3,
      image: customer,
      title: 'Nissan Vanette',
      description: 'Sold to Michael Johnson',
      testimonial: '"The best investment for my delivery service. Couldn\'t be happier!"',
      date: 'May 2024',
      price: '$13,800'
    },
    {
      id: 4,
      image: customer,
      title: 'Mitsubishi Minicab',
      description: 'Sold to Emily Davis',
      testimonial: '"Professional team and amazing after-sales support. Thank you!"',
      date: 'June 2024',
      price: '$11,900'
    },
    {
      id: 5,
      image: customer,
      title: 'Daihatsu Hijet',
      description: 'Sold to David Martinez',
      testimonial: '"Perfect for my needs. The team went above and beyond!"',
      date: 'July 2024',
      price: '$10,500'
    },
    {
      id: 6,
      image: customer,
      title: 'Honda Acty',
      description: 'Sold to Sarah Johnson',
      testimonial: '"Amazing experience from start to finish. Will definitely return!"',
      date: 'August 2024',
      price: '$14,300'
    },
  ]);

  // Uncomment this if you want to fetch random images
  // useEffect(() => {
  //   const fetchRandomImages = async () => {
  //     const updatedItems = await Promise.all(
  //       items.map(async (item) => {
  //         const response = await fetch('https://source.unsplash.com/random/300x200');
  //         const imageUrl = response.url;
  //         return { ...item, image: imageUrl };
  //       })
  //     );
  //     setItems(updatedItems);
  //   };

  //   fetchRandomImages();
  // }, []);

  // Duplicate items to create an infinite loop effect
  const duplicatedItems = [...items, ...items];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id='CarCollection'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#A4D037] to-green-600">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how we've helped customers find their perfect vehicles. Each story represents our commitment to excellence.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          {/* Scrolling Items */}
          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-96 mx-6 my-8 bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-sm font-semibold bg-[#A4D037] px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                    <p className="text-xl font-bold mt-2">{item.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-[#A4D037] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600">Verified Purchase</span>
                  </div>
                  <p className="text-gray-700 italic">"{item.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Collection;