import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon
} from 'react-share';

import { FaFacebook } from 'react-icons/fa';
import suzukiEvery from './img/Suzuki Carry DA52 FB.png';
import suzukiEvery1 from './img/Suzuki Carry DA63 FB.png';
import suzukiEvery2 from './img/Suzuki Carry DC51 Dropside-1.png';
import suzukiEvery3 from './img/Suzuki Carry DC51 Dropside.png';
import suzukiEvery4 from './img/Suzuki Carry DC51 FB.png';
import suzukiEvery5 from './img/Suzuki Carry DC51 ‘Scrum’ Closed Van.png';
import suzukiEvery6 from './img/Suzuki Every DA64 Double Cab.png';
import suzukiEvery7 from './img/Suzuki Every DA64 Minivan-1.png';
import suzukiEvery8 from './img/Suzuki Every DA64 Minivan-2.png';
import suzukiEvery9 from './img/Suzuki Every DA64 Minivan-3.png';
import suzukiEvery10 from './img/Suzuki Every DA64 Minivan-4.png';
import suzukiEvery11 from './img/Suzuki Every DA64 Minivan-5.png';
import suzukiEvery12 from './img/Suzuki Every DA64 Minivan.png';

interface Car {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: { [key: string]: string };
  promoCode?: string;
}

const CarCollection: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [cars, setCars] = useState<Car[]>([
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery1,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery2,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery3,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery4,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery5,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery6,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery7,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery8,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery9,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery10,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery11,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    },
    {
      id: 'SUZUKI-EVERY-DA64',
      name: 'Suzuki Every DA64 Minivan',
      price: '₱240,000 – ₱278,000',
      image: suzukiEvery12,
      description: 'Reliable fuel-efficient mini van perfect for family and business use',
      details: {
        'Body Type': 'Minivan',
        'Engine Model': 'K6A (EFI)',
        'Fuel Type': 'Gasoline',
        'Transmission': '5-Speed MT/Automatic',
        'Drivetrain': '4×2 / 4×4',
        'Air Conditioning': 'Dual Zone AC',
        'Seating Capacity': '8 Persons',
        'Fuel Efficiency': '18-22 km/l'
      },
    }
    // Add other car objects with unique IDs
  ]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // Generate promo code on component mount
  useEffect(() => {
    setCars(prevCars => prevCars.map(car => ({
      ...car,
      promoCode: `PROMO-${car.id}-${Math.floor(100 + Math.random() * 900)}`
    })));
  }, []);

  const redirectToMessenger = (car: Car) => {
    const message = `Hi, I'm interested in the ${car.name}!\n\n` +
      `*Price Range:* ${car.price}\n` +
      `*Key Features:* ${car.description}\n` +
      `*Promo Code:* ${car.promoCode}\n\n` +
      `Could you provide more details about:\n- Availability\n- Test drive options\n- Financing plans?`;

    const encodedMessage = encodeURIComponent(message);
    const messengerUrl = `https://m.me/mr.c0oletz?text=${encodedMessage}`;
    window.open(messengerUrl, '_blank', 'noopener,noreferrer');
  };

  // Accessibility & Modal handling
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.querySelector('.modal-content');
      if (modal && !modal.contains(event.target as Node)) {
        setSelectedCar(null);
      }
    };

    if (selectedCar) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [selectedCar]);

  return (
    <section className="py-20 bg-gray-50" id="collection">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-bold mb-16 text-gray-900">
          Explore Our Premium Collection
          <span className="block mt-2 text-lg font-normal text-gray-600">Quality Vehicles with Competitive Pricing</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={true} // Enable infinite loop
          autoplay={{ delay: 5000 }} // Autoplay every 5 seconds
          coverflowEffect={{
            rotate: 0,
            stretch: 0, // No stretch to keep the cards aligned
            depth: 200,
            modifier: 1,
            slideShadows: false
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          // navigation={{
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev'
          // }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }}
          className="pb-12"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-72">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50" />
                  <span className="absolute top-4 right-4 bg-[#A4D037] text-white px-3 py-1 rounded-full text-sm">
                    Promo Available
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#A4D037] font-bold text-lg">{car.price}</p>
                      <p className="text-gray-500 text-sm">Flexible payment options</p>
                    </div>
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <div className="swiper-button-next !text-gray-900 !w-12 !h-12 after:!text-xl" />
          <div className="swiper-button-prev !text-gray-900 !w-12 !h-12 after:!text-xl" /> */}
        </Swiper>

        {selectedCar && (
          <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden transform transition-all modal-content flex flex-col md:flex-row">
              <div className="relative md:w-1/2">
                {/* Image Section */}
                <div className="relative h-64 md:h-full">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details Section */}
              <div className="p-4 md:p-8 space-y-4 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {selectedCar.name}
                  </h3>
                  <p className="text-base md:text-lg text-[#A4D037] font-semibold">
                    {selectedCar.price}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Key Specifications</h4>
                  <table className="w-full text-left">
                    <tbody>
                      {Object.entries(selectedCar.details).map(([key, value]) => (
                        <tr key={key}>
                          <td className="text-gray-600 text-sm md:text-base w-24">{key}</td>
                          <td className="text-gray-900 font-medium">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
                  <button
                    onClick={() => redirectToMessenger(selectedCar)}
                    className="bg-[#006AFF] text-white py-3 rounded-lg hover:bg-[#0059D6] transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <FaFacebook className="text-white" />
                    <span>📩 Get Exclusive Discount</span>
                  </button>

                  <div className="text-center text-gray-600 text-sm">
                    Use promo code:
                    <span className="ml-2 font-bold text-[#A4D037]">
                      {selectedCar.promoCode}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-center text-gray-600">
                      Share this vehicle
                    </p>
                    <div className="flex justify-center space-x-3">
                      <FacebookShareButton
                        url={shareUrl}
                        title={`Check out this ${selectedCar.name} - ${selectedCar.price}\n${selectedCar.description}`}
                        hashtag="#PremiumCars"
                      >
                        <FacebookIcon size={40} round />
                      </FacebookShareButton>
                      <WhatsappShareButton
                        url={shareUrl}
                        title={`${selectedCar.name}\nPrice: ${selectedCar.price}\nPromo Code: ${selectedCar.promoCode}\n\n`}
                      >
                        <WhatsappIcon size={40} round />
                      </WhatsappShareButton>
                      <EmailShareButton
                       url={shareUrl}
                        subject={`Inquiry about ${selectedCar.name}`}
                        body={`Hi, I'm interested in this vehicle:\n\n${JSON.stringify(selectedCar.details, null, 2)}`}
                      >
                        <EmailIcon size={40} round />
                      </EmailShareButton>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors shadow-lg flex items-center justify-center"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarCollection;
