import React, { useEffect, useState } from 'react';
import customer from './img/customer_1.jpg';

const Collection = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: customer,
      title: 'Suzuki Every Mini Van',
      description: 'Sold to John Doe',
    },
    {
      id: 2,
      image: customer,
      title: 'Toyota Multi Cab',
      description: 'Sold to Jane Smith',
    },
    {
      id: 3,
      image: customer,
      title: 'Nissan Vanette',
      description: 'Sold to Michael Johnson',
    },
    {
      id: 4,
      image: customer,
      title: 'Mitsubishi Minicab',
      description: 'Sold to Emily Davis',
    },
    {
      id: 5,
      image: customer,
      title: 'Daihatsu Hijet',
      description: 'Sold to David Martinez',
    },
    {
      id: 6,
      image: customer,
      title: 'Honda Acty',
      description: 'Sold to Sarah Johnson',
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
    <section className="py-16 bg-gray-50 overflow-hidden" id='CarCollection'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection Story</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore the journey of our sold items and collections. Each vehicle has a story to tell, and we're proud to share it with you.
        </p>

        {/* Horizontal Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          {/* Scrolling Items */}
          <div className="flex animate-scroll">
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`} // Use a combination of id and index for unique keys
                className="flex-shrink-0 w-80 mx-4 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Collection;