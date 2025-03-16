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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden modal-content my-4 sm:my-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-0 min-h-[60vh] sm:min-h-[80vh]">
          {/* Image Section */}
          <div className="relative h-64 sm:h-full group">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100" />
            
            {/* Car Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3"
              >
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#A4D037]/20 text-[#A4D037] text-xs sm:text-sm font-medium rounded-full border border-[#A4D037]/30 backdrop-blur-sm">
                  Premium Import
                </span>
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 text-white text-xs sm:text-sm font-medium rounded-full backdrop-blur-sm">
                  Available Now
                </span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
              >
                {car.name}
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center flex-wrap gap-2 sm:gap-4"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#A4D037] drop-shadow-lg">
                  {car.price}
                </div>
                <span className="text-white/70 text-sm hidden sm:inline">|</span>
                <div className="text-white/70 text-xs sm:text-sm flex items-center">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-[#A4D037]" />
                  In Stock
                </div>
              </motion.div>
            </div>

            {/* Image Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {[1, 2, 3].map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === 0 ? 'bg-white w-3' : 'bg-white/50'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl font-bold text-gray-900"
                  >
                    Vehicle Overview
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#A4D037] text-xs sm:text-sm font-medium"
                  >
                    Limited time offer available
                  </motion.p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <button 
                    onClick={() => onFavoriteToggle(car.id)} 
                    className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation group"
                  >
                    <FaHeart className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                      favorites.includes(car.id) 
                        ? 'text-red-500' 
                        : 'text-gray-400 group-hover:text-red-500'
                    }`} />
                  </button>
                  <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation group">
                    <FaShare className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#A4D037]" />
                  </button>
                </motion.div>
              </div>

              {/* Value Proposition */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6 shadow-sm"
              >
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <FaStar className="text-[#A4D037] mr-2" />
                  Why Choose This Vehicle?
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "Excellent Fuel Efficiency",
                      description: "Save money on daily commutes with impressive fuel economy of 18-22 km/l",
                      icon: <FaGasPump className="text-[#A4D037]" />
                    },
                    {
                      title: "Versatile Interior Space",
                      description: "Perfect for both family outings and business deliveries with flexible seating configuration",
                      icon: <FaUsers className="text-[#A4D037]" />
                    },
                    {
                      title: "Proven Reliability",
                      description: "Well-maintained Japan surplus with documented service history and quality assurance",
                      icon: <FaCheckCircle className="text-[#A4D037]" />
                    }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-2 sm:space-x-3 group"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium text-sm sm:text-base">{item.title}</span>
                        <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="space-y-3 sm:space-y-4">
              {/* Special Offer Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-[#A4D037]/10 via-[#A4D037]/20 to-[#A4D037]/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative space-y-2 sm:space-y-3">
                  <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-[#A4D037]/20 rounded-full text-[#7FA728] text-xs sm:text-sm font-medium">
                    Special Offer
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Use exclusive promo code:</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#7FA728] tracking-wider bg-white/50 py-1.5 sm:py-2 rounded-lg group-hover:bg-white/70 transition-colors duration-300">
                    {car.promoCode}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Get special discounts and priority processing
                  </p>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm"
              >
                <div className="text-center mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Ready to make it yours?</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Message us now to:</p>
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-2 text-xs sm:text-sm text-gray-600">
                    {[
                      "Reserve Unit",
                      "Schedule Test Drive",
                      "Get Best Deal"
                    ].map((text, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center justify-center space-x-1"
                      >
                        <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#A4D037]" />
                        <span>{text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    onClick={() => onMessageClick(car)}
                    className="w-full bg-[#006AFF] text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-[#0059D6] transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group relative overflow-hidden text-sm sm:text-base touch-manipulation transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <FaFacebookMessenger className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative">Message Us Now</span>
                  </motion.button>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center space-x-2 sm:space-x-3"
                  >
                    {[
                      {
                        Button: FacebookShareButton,
                        Icon: FacebookIcon,
                        props: {
                          url: shareUrl,
                          title: `${shareTitle}\n${car.name} - ${car.price}`,
                          hashtag: "#HighwayMotorsCamSur"
                        }
                      },
                      {
                        Button: TwitterShareButton,
                        Icon: TwitterIcon,
                        props: {
                          url: shareUrl,
                          title: `${shareTitle}\n${car.name} - ${car.price}`,
                          hashtags: ["HighwayMotorsCamSur", "PremiumCars"]
                        }
                      },
                      {
                        Button: WhatsappShareButton,
                        Icon: WhatsappIcon,
                        props: {
                          url: shareUrl,
                          title: `${shareTitle}\n${car.name}\nPrice: ${car.price}`
                        }
                      }
                    ].map((share, index) => (
                      <share.Button
                        key={index}
                        {...share.props}
                        className="transform hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                      >
                        <share.Icon size={32} round />
                      </share.Button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors p-1.5 sm:p-2 backdrop-blur-sm bg-black/20 rounded-full touch-manipulation hover:bg-black/30 transform hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-gradient-to-br from-white to-gray-50/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-lg w-full mx-auto shadow-xl relative backdrop-blur-xl"
        onClick={e => e.stopPropagation()}
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-start mb-4 sm:mb-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Quick View</h3>
            <p className="text-gray-500 text-xs sm:text-sm">Vehicle Specifications</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 touch-manipulation transform hover:scale-110 active:scale-95"
            aria-label="Close quick view"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          {Object.entries(car.details).map(([key, value], index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <span className="text-gray-600 text-sm sm:text-base group-hover:text-[#A4D037] transition-colors duration-300">{key}</span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
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
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative flex flex-col h-full"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2">
          <button
            onClick={() => onFavoriteToggle()}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 touch-manipulation"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <FaHeart className={`text-lg sm:text-xl ${isFavorite ? 'text-red-500' : 'text-gray-600'}`} />
          </button>
          <button
            onClick={onQuickView}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 touch-manipulation"
            aria-label="Quick view"
          >
            <FaInfoCircle className="text-lg sm:text-xl text-gray-600" />
          </button>
        </div>

        {/* Promo Badge */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#A4D037] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-lg">
          Promo Available
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#A4D037] transition-colors duration-300 line-clamp-2">
          {car.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">{car.description}</p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6 mt-auto">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <FaTachometerAlt className="text-[#A4D037] text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-gray-600 truncate">{car.details['Transmission']}</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <FaGasPump className="text-[#A4D037] text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-gray-600 truncate">{car.details['Fuel Efficiency']}</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <FaUsers className="text-[#A4D037] text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-gray-600 truncate">{car.details['Seating Capacity']}</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <FaCog className="text-[#A4D037] text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-gray-600 truncate">{car.details['Engine Model']}</span>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
          <div>
            <p className="text-[#A4D037] font-bold text-lg sm:text-xl">{car.price}</p>
            <p className="text-gray-500 text-xs sm:text-sm">Flexible payment options</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onDetails}
              className="flex-1 sm:flex-none bg-gray-900 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#A4D037] transition-colors duration-300 font-semibold text-sm sm:text-base touch-manipulation"
            >
              Details
            </button>
            <button
              onClick={onMessage}
              className="flex-1 sm:flex-none bg-[#006AFF] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#0059D6] transition-colors duration-300 font-semibold text-sm sm:text-base touch-manipulation"
            >
              <FaFacebookMessenger className="text-lg sm:text-xl mx-auto" />
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
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden" id="Carcollection">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-[#7FA728] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-[#A4D037] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-72 sm:w-96 h-72 sm:h-96 bg-[#7FA728] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-[#A4D037]">
            Explore Our Premium Collection
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
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
              depth: 100,
              modifier: 2,
              slideShadows: false
            }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !w-2 !h-2 sm:!w-3 sm:!h-3 !bg-gray-300 !opacity-50 !transition-all"></span>`;
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 }
            }}
            className="!pb-12 sm:!pb-16"
          >
            {cars.map((car) => (
              <SwiperSlide key={car.id} className="h-auto">
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
            <div className="swiper-button-next !hidden sm:!flex !text-gray-900 !w-10 !h-10 sm:!w-12 sm:!h-12 after:!text-lg sm:after:!text-xl !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-colors duration-300" />
            <div className="swiper-button-prev !hidden sm:!flex !text-gray-900 !w-10 !h-10 sm:!w-12 sm:!h-12 after:!text-lg sm:after:!text-xl !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-colors duration-300" />
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
