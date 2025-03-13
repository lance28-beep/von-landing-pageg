import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation2, Car, Users, Building2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isMapLoading, setIsMapLoading] = useState(true);

  // Reset loading state when location changes
  useEffect(() => {
    setIsMapLoading(true);
  }, [selectedLocation]);

  const locations = [
    {
      title: 'Main Showroom',
      subtitle: 'Premium Vehicle Display Center',
      address: 'Anayan, Pili, Camarines Sur, 4418 Philippines',
      phone: '+63 912 345 6789',
      email: 'info@highwaymotors.com',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.244078928259!2d123.2840638145075!3d13.53718549036693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a192240afdaa65%3A0xb73b445495295935!2sAnayan%2C%20Pili%2C%20Camarines%20Sur!5e0!3m2!1sen!2sph!4v1709825169407!5m2!1sen!2sph',
      stats: {
        vehicles: '50+',
        customers: '1000+',
        experience: '10+ Years'
      }
    },
    {
      title: 'Naga City Branch',
      subtitle: 'Urban Sales Center',
      address: 'Magsaysay Avenue, Naga City, 4400 Philippines',
      phone: '+63 923 456 7890',
      email: 'naga@highwaymotors.com',
      hours: 'Mon - Sun: 8:00 AM - 7:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.037642182909!2d123.74935857504547!3d13.621645086529892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1ebf58a11b8f5%3A0x6c5c15148e924a47!2sMagsaysay%20Ave%2C%20Naga%20City%2C%20Camarines%20Sur!5e0!3m2!1sen!2sph!4v1709825169407!5m2!1sen!2sph',
      stats: {
        vehicles: '30+',
        customers: '500+',
        experience: '5+ Years'
      }
    },
    {
      title: 'Legazpi Branch',
      subtitle: 'Coastal Display Center',
      address: 'Rizal Street, Legazpi City, 4500 Philippines',
      phone: '+63 934 567 8901',
      email: 'legazpi@highwaymotors.com',
      hours: 'Mon - Sat: 8:30 AM - 6:30 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.6505056321785!2d123.74935857504547!3d13.139769987302392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1011d1d00b9a7%3A0x41db35c5f8b9d89f!2sRizal%20St%2C%20Legazpi%20City%2C%20Albay!5e0!3m2!1sen!2sph!4v1709825169407!5m2!1sen!2sph',
      stats: {
        vehicles: '40+',
        customers: '800+',
        experience: '7+ Years'
      }
    }
  ];

  const handleMapLoad = () => {
    setIsMapLoading(false);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#a4d037]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a4d037]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-[#a4d037]/10 text-[#a4d037] font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Locations
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Visit Our Showrooms
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Experience our premium Japan surplus vehicles in person at any of our strategically located showrooms across the region.
          </motion.p>
        </motion.div>

        {/* Location Selector */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {locations.map((location, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedLocation(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedLocation === index
                  ? 'bg-[#a4d037] text-white shadow-lg shadow-[#a4d037]/20'
                  : 'bg-white/80 text-gray-600 hover:bg-[#a4d037]/10 hover:text-[#a4d037]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {location.title}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map with loading state */}
          <motion.div
            className="h-[500px] bg-white rounded-2xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <iframe
                  src={locations[selectedLocation].mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  onLoad={handleMapLoad}
                ></iframe>
              </motion.div>
            </AnimatePresence>

            {/* Loading overlay */}
            <AnimatePresence>
              {isMapLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="flex items-center space-x-2 text-[#a4d037]">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span className="font-medium">Loading map...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Location Details */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/30"
              >
                <h3 className="text-2xl font-bold mb-2">{locations[selectedLocation].title}</h3>
                <p className="text-[#a4d037] font-medium mb-6">{locations[selectedLocation].subtitle}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-[#a4d037]/5 rounded-xl">
                    <Car className="w-6 h-6 text-[#a4d037] mx-auto mb-2" />
                    <div className="font-bold text-xl">{locations[selectedLocation].stats.vehicles}</div>
                    <div className="text-sm text-gray-600">Vehicles</div>
                  </div>
                  <div className="text-center p-4 bg-[#a4d037]/5 rounded-xl">
                    <Users className="w-6 h-6 text-[#a4d037] mx-auto mb-2" />
                    <div className="font-bold text-xl">{locations[selectedLocation].stats.customers}</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                  <div className="text-center p-4 bg-[#a4d037]/5 rounded-xl">
                    <Building2 className="w-6 h-6 text-[#a4d037] mx-auto mb-2" />
                    <div className="font-bold text-xl">{locations[selectedLocation].stats.experience}</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start group">
                    <MapPin className="text-[#a4d037] mt-1 mr-3 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-gray-600">{locations[selectedLocation].address}</p>
                  </div>
                  <div className="flex items-center group">
                    <Phone className="text-[#a4d037] mr-3 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-gray-600">{locations[selectedLocation].phone}</p>
                  </div>
                  <div className="flex items-center group">
                    <Mail className="text-[#a4d037] mr-3 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-gray-600">{locations[selectedLocation].email}</p>
                  </div>
                  <div className="flex items-center group">
                    <Clock className="text-[#a4d037] mr-3 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-gray-600">{locations[selectedLocation].hours}</p>
                  </div>
                </div>

                <motion.a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locations[selectedLocation].address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center w-full bg-[#a4d037] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#93bb32] transition-all duration-300 space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Navigation2 className="w-5 h-5" />
                  <span>Get Directions</span>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
