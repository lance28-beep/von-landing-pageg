import React, { useEffect, useState } from 'react';
import customer from './img/customer_1.jpg';
import customer1 from './img/random_img (1).jpg';
import customer2 from './img/random_img (2).jpg';
import customer3 from './img/random_img (3).jpg';
import customer4 from './img/random_img (4).jpg';
import customer5 from './img/random_img (5).jpg';
import customer6 from './img/random_img (6).jpg';
import customer7 from './img/random_img (7).jpg';
import customer8 from './img/random_img (8).jpg';
import customer9 from './img/random_img (9).jpg';
import customer10 from './img/random_img (10).jpg';
import customer11 from './img/random_img (11).jpg';
import customer12 from './img/random_img (12).jpg';
import customer13 from './img/random_img (13).jpg';
import customer14 from './img/random_img (14).jpg';
import customer15 from './img/random_img (15).jpg';
import customer16 from './img/random_img (16).jpg';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  promo: string;
}

// Contact Modal Component
const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, promo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full mx-auto shadow-2xl transform transition-all">
        <div className="relative p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">🚗 Exclusive Deal Alert! 🎁</h3>
              <div className="bg-gradient-to-r from-[#A4D037] to-green-600 text-white px-4 py-3 rounded-lg mb-4">
                <p className="font-semibold text-lg mb-1">Grab This Limited Offer:</p>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">FREE 3-YEAR PMS</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">PLUS</span>
                    <p className="text-xl font-bold">LOW DOWNPAYMENT</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-red-600 font-bold animate-pulse">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Offer Ends Soon!</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-800 text-lg font-semibold mb-3">
                  What You'll Get:
                </p>
                <ul className="text-left text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Complete 3-Year Preventive Maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Minimum Downpayment Options</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible Payment Terms</span>
                  </li>
                </ul>
              </div>

              {/* Messenger CTA */}
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-800">
                  🔥 Chat with us now to avail this exclusive offer!
                </p>
                <a
                  href="https://m.me/your.messenger.id" // Replace with your Messenger ID
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-white bg-[#0084FF] hover:bg-[#0072db] rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.44 5.51 3.69 7.19V22l3.4-1.87c.91.25 1.88.38 2.91.38 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm1.13 12.89l-2.53-2.69-4.94 2.69 5.44-5.8 2.59 2.69 4.89-2.69-5.45 5.8z"/>
                  </svg>
                  Message Now for Details
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <div className="text-sm text-gray-600">
                  <p>✨ Get Instant Response</p>
                  <p>🔒 Secure & Private Chat</p>
                  <p>💫 Special Offer Reserved Upon Chat</p>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-4">
              *Limited time offer. Terms and conditions apply. Chat with us for complete details.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Item {
  id: number;
  image: string;
  title: string;
  description: string;
  testimonial: string;
  date: string;
  promo: string;
}

const Collection: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      image: customer,
      title: 'Suzuki Every Mini Van',
      description: 'Sold to John Santos',
      testimonial: '"Sobrang ganda ng sasakyan! Ang galing ng team sa pag-assist sa akin. Sulit na sulit!"',
      date: 'March 2024',
      promo: 'Zero DP | 5-Year Warranty'
    },
    {
      id: 2,
      image: customer2,
      title: 'Toyota Multi Cab',
      description: 'Sold to Maria Garcia',
      testimonial: '"Napakaganda ng serbisyo! Mabilis ang proseso at napakabait ng mga staff. Highly recommended!"',
      date: 'April 2024',
      promo: 'Free 1-Year Insurance'
    },
    {
      id: 3,
      image: customer3,
      title: 'Nissan Vanette',
      description: 'Sold to Carlo Reyes',
      testimonial: '"Best investment para sa negosyo ko! Tipid sa gas at madaling i-maintain."',
      date: 'May 2024',
      promo: '20% DP Discount'
    },
    {
      id: 4,
      image: customer4,
      title: 'Mitsubishi Minicab',
      description: 'Sold to Ana Dela Cruz',
      testimonial: '"Salamat sa Highway Motors! Napakaganda ng unit at super helpful ng team."',
      date: 'June 2024',
      promo: 'Free Registration | TPL'
    },
    {
      id: 5,
      image: customer5,
      title: 'Daihatsu Hijet',
      description: 'Sold to Ramon Mendoza',
      testimonial: '"Perfect sa pamilya at sa negosyo! Sobrang galing ng after-sales support!"',
      date: 'July 2024',
      promo: 'Low Monthly | Zero Interest'
    },
    {
      id: 6,
      image: customer6,
      title: 'Honda Acty',
      description: 'Sold to Sarah Pascual',
      testimonial: '"Napakagandang experience! Hindi ako nagkamali sa pagpili ng Highway Motors."',
      date: 'August 2024',
      promo: 'All-in Package | Free Tint'
    },
    {
      id: 7,
      image: customer7,
      title: 'Toyota Hiace',
      description: 'Sold to Michael Santos',
      testimonial: '"Ang ganda ng unit! Sobrang tipid sa gas at perfect sa business ko."',
      date: 'September 2024',
      promo: 'Free Dashcam | Ceramic Coating'
    },
    {
      id: 8,
      image: customer8,
      title: 'Suzuki Every',
      description: 'Sold to Jenny Lim',
      testimonial: '"Best decision ever! Napakagaling ng team at super accommodating!"',
      date: 'September 2024',
      promo: 'Low DP | Free Maintenance'
    },
    {
      id: 9,
      image: customer9,
      title: 'Toyota HiAce',
      description: 'Sold to Paolo Rivera',
      testimonial: '"Sobrang worth it! Mabilis ang proseso at walang hassle sa requirements."',
      date: 'September 2024',
      promo: 'Easy Financing | Zero Hidden Fees'
    },
    {
      id: 10,
      image: customer10,
      title: 'Mitsubishi L300',
      description: 'Sold to Linda Torres',
      testimonial: '"Napaka-professional ng team! Ang ganda ng after-sales support nila."',
      date: 'September 2024',
      promo: 'Trade-in Bonus | Free PPF'
    },
    {
      id: 11, 
      image: customer11,
      title: 'Nissan Urvan',
      description: 'Sold to Ben Aquino',
      testimonial: '"Salamat sa pag-assist! Napakaganda ng unit at super tipid sa gas!"',
      date: 'September 2024',
      promo: 'Free 3-Year PMS | Low DP'
    },  
    {
      id: 12,
      image: customer12,
      title: 'Isuzu Elf',
      description: 'Sold to Grace Tan', 
      testimonial: '"Ang galing ng Highway Motors! Mabilis at madaling process ng papers."',
      date: 'September 2024',
      promo: 'Zero Interest | Free Insurance'
    },
    {
      id: 13,
      image: customer13,
      title: 'Toyota Grandia',
      description: 'Sold to David Cruz',
      testimonial: '"Perfect sa family business! Napakaganda ng condition ng sasakyan."',
      date: 'September 2024',
      promo: 'All-in Low DP | Free Accessories'
    },  
    {
      id: 14,
      image: customer14,
      title: 'Mitsubishi Delica',
      description: 'Sold to Rico Gomez', 
      testimonial: '"Sobrang satisfied sa service! Mababait at professional ang staff."',      
      date: 'September 2024',
      promo: 'Easy Monthly | Free Security'
    },
    {
      id: 15,   
      image: customer15,
      title: 'Nissan NV350',
      description: 'Sold to Elena Santos',
      testimonial: '"Best deal sa market! Napakaganda ng condition at super tipid!"',
      date: 'September 2024',
      promo: 'Low DP | Free Registration'
    },                  
    {
      id: 16,
      image: customer16,
      title: 'Toyota Commuter',
      description: 'Sold to Marco Reyes',         
      testimonial: '"Napakagandang investment! Sobrang helpful ng team sa financing."',
      date: 'September 2024',
      promo: 'Zero DP | All-in Package'
    },
  ]);

  const [selectedPromo, setSelectedPromo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (promo: string): void => {
    setSelectedPromo(promo);
    setIsModalOpen(true);
  };

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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id='collection'>
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
          {/* Primary Scrolling Items */}
          <div className="flex animate-scroll hover:pause-animation">
            {items.map((item, index) => (
              <div
                key={`primary-${item.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-96 mx-3 md:mx-6 my-8 bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCardClick(item.promo)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <span className="text-sm font-semibold bg-[#A4D037] px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm md:text-base">{item.description}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.promo}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#A4D037] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600 text-sm md:text-base">Verified Purchase</span>
                  </div>
                  <p className="text-gray-700 italic text-sm md:text-base">{item.testimonial}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {items.map((item, index) => (
              <div
                key={`duplicate-${item.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-96 mx-3 md:mx-6 my-8 bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCardClick(item.promo)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <span className="text-sm font-semibold bg-[#A4D037] px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm md:text-base">{item.description}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.promo}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#A4D037] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600 text-sm md:text-base">Verified Purchase</span>
                  </div>
                  <p className="text-gray-700 italic text-sm md:text-base">{item.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        promo={selectedPromo || ''}
      />

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
          animation: scroll 60s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 45s;
          }
        }
      `}</style>
    </section>
  );
};

export default Collection;