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
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  TwitterIcon
} from 'react-share';
import { FaFacebook, FaHeart, FaShare, FaInfoCircle, FaTachometerAlt, FaGasPump, FaUsers, FaCog, FaTwitter, FaStar, FaCheckCircle, FaFacebookMessenger } from 'react-icons/fa';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import suzukiEvery from './img/Wireframe - 1-min.png';
import suzukiEvery1 from './img/Wireframe - 2-min.png';
import suzukiEvery2 from './img/Wireframe - 3-min.png';
import suzukiEvery3 from './img/Wireframe - 4-min.png';
import suzukiEvery4 from './img/Wireframe - 5-min.png';
import suzukiEvery5 from './img/Wireframe - 6-min.png';
import suzukiEvery6 from './img/Wireframe - 7-min.png';
import suzukiEvery7 from './img/Wireframe - 8-min.png';
import suzukiEvery8 from './img/Wireframe - 9-min.png';
import suzukiEvery9 from './img/Wireframe - 10-min.png';
import suzukiEvery10 from './img/Wireframe - 11-min.png';
import suzukiEvery11 from './img/Wireframe - 12-min.png';
import suzukiEvery12 from './img/Wireframe - 6-min.png';

// Types
interface Car {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: {
    'Body Type': string;
    'Engine Model': string;
    'Fuel Type': string;
    'Transmission': string;
    'Drivetrain': string;
    'Air Conditioning': string;
    'Seating Capacity': string;
    'Fuel Efficiency': string;
  };
  promoCode?: string;
}

// Components
const CarModal: React.FC<{
  car: Car;
  onClose: () => void;
  favorites: string[];
  onFavoriteToggle: (id: string) => void;
  onMessageClick: (car: Car) => void;
}> = ({ car, onClose, favorites, onFavoriteToggle, onMessageClick }) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Check out this amazing vehicle from Highway Motors CamSur!";
  
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden modal-content my-8 relative"
      >
        <div className="grid md:grid-cols-2 gap-0 min-h-[80vh]">
          {/* Image Section */}
          <div className="relative h-full group">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100" />
            
            {/* Car Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-3 py-1 bg-[#A4D037]/20 text-[#A4D037] text-sm font-medium rounded-full border border-[#A4D037]/30">
                  Premium Import
                </span>
                <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                  Available Now
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {car.name}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-[#A4D037] drop-shadow-lg">
                  {car.price}
                </div>
                <span className="text-white/70 text-sm">|</span>
                <div className="text-white/70 text-sm flex items-center">
                  <FaCheckCircle className="w-4 h-4 mr-2 text-[#A4D037]" />
                  In Stock
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-between h-full">
            {/* Top Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vehicle Overview</h3>
                    <p className="text-[#A4D037] text-sm font-medium">Limited time offer available</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => onFavoriteToggle(car.id)} 
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FaHeart className={`w-6 h-6 ${favorites.includes(car.id) ? 'text-red-500' : 'text-gray-400'}`} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FaShare className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Why Choose This Vehicle?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="w-5 h-5 text-[#A4D037] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">Excellent Fuel Efficiency</span>
                      <p className="text-gray-600 text-sm mt-1">Save money on daily commutes with impressive fuel economy of 18-22 km/l</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="w-5 h-5 text-[#A4D037] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">Versatile Interior Space</span>
                      <p className="text-gray-600 text-sm mt-1">Perfect for both family outings and business deliveries with flexible seating configuration</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="w-5 h-5 text-[#A4D037] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">Proven Reliability</span>
                      <p className="text-gray-600 text-sm mt-1">Well-maintained Japan surplus with documented service history and quality assurance</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="space-y-4">
              {/* Special Offer Section */}
              <div className="bg-gradient-to-r from-[#A4D037]/10 via-[#A4D037]/20 to-[#A4D037]/10 rounded-xl p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative space-y-3">
                  <div className="inline-block px-3 py-1 bg-[#A4D037]/20 rounded-full text-[#7FA728] text-sm font-medium">
                    Special Offer
                  </div>
                  <div className="text-sm text-gray-600">Use exclusive promo code:</div>
                  <div className="text-2xl font-bold text-[#7FA728] tracking-wider bg-white/50 py-2 rounded-lg">
                    {car.promoCode}
                  </div>
                  <p className="text-sm text-gray-600">
                    Get special discounts and priority processing
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-900">Ready to make it yours?</h4>
                  <p className="text-sm text-gray-600">Message us now to:</p>
                  <div className="grid grid-cols-3 gap-2 mt-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-1">
                      <FaCheckCircle className="w-4 h-4 text-[#A4D037]" />
                      <span>Reserve Unit</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <FaCheckCircle className="w-4 h-4 text-[#A4D037]" />
                      <span>Schedule Test Drive</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <FaCheckCircle className="w-4 h-4 text-[#A4D037]" />
                      <span>Get Best Deal</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => onMessageClick(car)}
                    className="bg-[#006AFF] text-white py-3 rounded-xl hover:bg-[#0059D6] transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <FaFacebookMessenger className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative">Message Us Now</span>
                  </button>
                  <div className="flex items-center justify-center space-x-3">
                    <FacebookShareButton
                      url={shareUrl}
                      title={`${shareTitle}\n${car.name} - ${car.price}`}
                      hashtag="#HighwayMotorsCamSur"
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <FacebookIcon size={36} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={shareUrl}
                      title={`${shareTitle}\n${car.name} - ${car.price}`}
                      hashtags={["HighwayMotorsCamSur", "PremiumCars"]}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <TwitterIcon size={36} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={shareUrl}
                      title={`${shareTitle}\n${car.name}\nPrice: ${car.price}`}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <WhatsappIcon size={36} round />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 backdrop-blur-sm bg-black/20 rounded-full"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

const QuickViewModal: React.FC<{
  carId: string | null;
  cars: Car[];
  onClose: () => void;
}> = ({ carId, cars, onClose }) => {
  if (!carId) return null;
  
  const car = cars.find(c => c.id === carId);
  if (!car) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 shadow-xl relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Quick View</h3>
            <p className="text-gray-500 text-sm">Vehicle Specifications</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          {Object.entries(car.details).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">{key}</span>
              <span className="font-medium text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const CarCard: React.FC<{
  car: Car;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onQuickView: () => void;
  onDetails: () => void;
  onMessage: () => void;
}> = ({ car, isFavorite, onFavoriteToggle, onQuickView, onDetails, onMessage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => onFavoriteToggle()}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
          >
            <FaHeart className={`${isFavorite ? 'text-red-500' : 'text-gray-600'}`} />
          </button>
          <button
            onClick={onQuickView}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
          >
            <FaInfoCircle className="text-gray-600" />
          </button>
        </div>

        {/* Promo Badge */}
        <span className="absolute top-4 left-4 bg-[#A4D037] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
          Promo Available
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#A4D037] transition-colors duration-300">
          {car.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <FaTachometerAlt className="text-[#A4D037]" />
            <span className="text-sm text-gray-600">{car.details['Transmission']}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGasPump className="text-[#A4D037]" />
            <span className="text-sm text-gray-600">{car.details['Fuel Efficiency']}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-[#A4D037]" />
            <span className="text-sm text-gray-600">{car.details['Seating Capacity']}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCog className="text-[#A4D037]" />
            <span className="text-sm text-gray-600">{car.details['Engine Model']}</span>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#A4D037] font-bold text-xl">{car.price}</p>
            <p className="text-gray-500 text-sm">Flexible payment options</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onDetails}
              className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-[#A4D037] transition-colors duration-300 font-semibold"
            >
              Details
            </button>
            <button
              onClick={onMessage}
              className="bg-[#006AFF] text-white px-5 py-2.5 rounded-lg hover:bg-[#0059D6] transition-colors duration-300 font-semibold"
            >
              <FaFacebookMessenger className="text-xl group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CarCollection: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showQuickView, setShowQuickView] = useState<string | null>(null);
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
  const shareTitle = "Check out this amazing vehicle from Highway Motors CamSur!";
  const shareDescription = "Premium Japan surplus vehicles with competitive pricing and excellent service.";

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

  const toggleFavorite = (carId: string) => {
    setFavorites(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  return (
    <section className="relative py-20 overflow-hidden" id="collection">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#7FA728] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#A4D037] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-96 h-96 bg-[#7FA728] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-[#A4D037]">
            Explore Our Premium Collection
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our exclusive range of premium vehicles, each carefully selected for quality and performance.
          </p>
        </motion.div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop={true}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false 
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 }
            }}
            className="pb-12"
          >
            {cars.map((car) => (
              <SwiperSlide key={car.id}>
                <CarCard
                  car={car}
                  isFavorite={favorites.includes(car.id)}
                  onFavoriteToggle={() => toggleFavorite(car.id)}
                  onQuickView={() => setShowQuickView(car.id)}
                  onDetails={() => setSelectedCar(car)}
                  onMessage={() => redirectToMessenger(car)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="hidden sm:block">
            <div className="swiper-button-next !text-gray-900 !w-12 !h-12 after:!text-xl !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-colors duration-300" />
            <div className="swiper-button-prev !text-gray-900 !w-12 !h-12 after:!text-xl !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-colors duration-300" />
          </div>
        </div>

        <AnimatePresence>
          {selectedCar && (
            <CarModal
              car={selectedCar}
              onClose={() => setSelectedCar(null)}
              favorites={favorites}
              onFavoriteToggle={toggleFavorite}
              onMessageClick={redirectToMessenger}
            />
          )}
          
          {showQuickView && (
            <QuickViewModal
              carId={showQuickView}
              cars={cars}
              onClose={() => setShowQuickView(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CarCollection;
